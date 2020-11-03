'use strict';

const isNil = require('lodash.isnil');
const truncate = require('lodash.truncate');
const removeMarkdown = require('remove-markdown');

require('dotenv').config();

const siteUrl = 'https://docs.kata.ai';

module.exports = {
  siteMetadata: {
    title: 'Kata Platform Documentation',
    sidebarTitle: 'Kata Platform Documentation',
    sidebarSubtext: 'Documentation',
    siteLastUpdated: new Date().toISOString(),
    description:
      'Kata Platform 3.0 is our biggest update yet. In this version, we are introducing several new features to help you build a more comprehensive solution for your needs.',
    version: '3.5.5',
    siteUrl,
    keywords: 'kata.ai, kata-ai, kata platform, artificial intelligence, ai, chatbot, documentation',
    author: {
      name: 'Kata.ai',
      url: 'https://kata.ai',
      email: 'info@kata.ai'
    },
    socials: [
      {
        name: 'Twitter',
        imgpath: 'icon-twitter.svg',
        url: 'https://twitter.com/KataDotAI'
      },
      {
        name: 'GitHub',
        imgpath: 'icon-github.svg',
        url: 'https://github.com/kata-ai'
      },
      {
        name: 'LinkedIn',
        imgpath: 'icon-linkedin.svg',
        url: 'https://www.linkedin.com/company/yesboss/'
      },
      {
        name: 'Medium',
        imgpath: 'icon-medium.svg',
        url: 'https://medium.com/kata-engineering'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '86',
              icon:
                '<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
              isIconAfterHeader: true
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              linkImagesToOriginal: false,
              wrapperStyle: {
                marginTop: 24,
                marginBottom: 24
              }
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [
          {
            name: 'en',
            // A function for filtering nodes. () => true by default
            filterNodes: node => !isNil(node.frontmatter)
          }
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'content' },
          { name: 'excerpt', store: true },
          { name: 'url', store: true }
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            excerpt: node => {
              // remove the hella dirty markdown body and return just plain string
              return truncate(removeMarkdown(node.rawMarkdownBody).replace(/\n/g, ' '), {
                length: 150
              });
            },
            url: node => node.fields.slug
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://docs.kata.ai'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#006fe6', // kata-blue
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kata Platform Documentation',
        short_name: 'Kata.ai Docs',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#f8fcff',
        background_color: '#f6f7f8'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID
      }
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
};
