'use strict';

const cssnext = require('postcss-cssnext');

module.exports = {
  siteMetadata: {
    title: 'Kata Platform Documentation',
    sidebarTitle: 'Kata Platform Documentation',
    sidebarSubtext: 'Documentation',
    siteLastUpdated: new Date().toISOString(),
    description: 'Documentation skeleton for Kata.ai.',
    siteUrl: 'https://grundgesetz-skeleton.now.sh',
    keywords: 'gatsbyjs, gatsby, documentation, sample project',
    author: {
      name: 'Kata.ai',
      url: 'https://kata.ai',
      email: 'info@kata.ai'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
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
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720,
              quality: 90,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-top: 1.5rem; margin-bottom: 1.5rem'
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
