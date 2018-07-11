'use strict';

const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, redirect_from, layout } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        if (relativePath === 'index.md') {
          // If we have homepage set in docs folder, use it.
          slug = '/';
        } else {
          slug = `/${relativePath.replace('.md', '')}/`;
        }
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      });

      // Used by createPages() to register redirects.
      createNodeField({
        node,
        name: 'redirect',
        value: redirect_from ? JSON.stringify(redirect_from) : ''
      });
    }
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {};

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
              redirect
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout, redirect } = node.fields;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    });

    // URL redirect handler
    // Adapted from reactjs/reactjs.org:
    // https://github.com/reactjs/reactjs.org/blob/master/gatsby-node.js#L111
    if (redirect) {
      let toRedirect = JSON.parse(node.fields.redirect);
      if (!Array.isArray(toRedirect)) {
        toRedirect = [toRedirect];
      }

      toRedirect.forEach(fromPath => {
        if (redirectToSlugMap[fromPath] != null) {
          console.error(
            `Duplicate redirect detected from "${fromPath}" to:\n` +
              `* ${redirectToSlugMap[fromPath]}\n` +
              `* ${slug}\n`
          );
        }

        // A leading "/" is required for redirects to work,
        // But multiple leading "/" will break redirects.
        // For more context see https://github.com/reactjs/reactjs.org/pull/194
        const toPath = slug.startsWith('/') ? slug : `/${slug}`;

        redirectToSlugMap[fromPath] = slug;
        createRedirect({
          fromPath: `/${fromPath}`,
          redirectInBrowser: true,
          toPath
        });
      });
    }
  });
};
