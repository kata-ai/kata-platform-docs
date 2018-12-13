'use strict';

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Kata Platform Documentation',
    sidebarTitle: 'Kata Platform Documentation',
    sidebarSubtext: 'Documentation',
    siteLastUpdated: new Date().toISOString(),
    description:
      'Kata Platform 3.0 is our biggest update yet. In this version, we are introducing several new features to help you build a more comprehensive solution for your needs.',
    version: '2.5',
    siteUrl: 'https://docs.kata.ai',
    keywords:
      'kata.ai, kata-ai, kata platform, artificial intelligence, ai, chatbot, documentation',
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
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-top: 24px; margin-bottom: 24px;'
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://docs.kata.ai'
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.tsx`)
      }
    },
    'gatsby-plugin-styled-components',
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
            src: '/android-chrome-256x256.png',
            sizes: '256x256',
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
