'use strict';

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Kata Platform Documentation',
    sidebarTitle: 'Kata Platform Documentation',
    sidebarSubtext: 'Documentation',
    siteLastUpdated: new Date().toISOString(),
    description:
      "Kata Platform 2.5 is the incremental update to the 2.0 version that was launched in December 2017. We're building 2.5 based on the mission that every component built now will be used in the next upcoming version.",
    version: '2.5',
    siteUrl: 'https://docs.kata.ai',
    keywords:
      'kata.ai, kata-ai, kata platform, kata platform 2.5, artificial intelligence, ai, chatbot, documentation',
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
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kata Platform Documentation',
        short_name: 'Kata Platform',
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
        theme_color: '#006fe6',
        background_color: '#f8fcff'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.DOCS_GA_TRACKING_CODE
      }
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
};
