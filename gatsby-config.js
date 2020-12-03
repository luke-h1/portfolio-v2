module.exports = {
  siteMetadata: {
    title: 'Luke H',
    author: {
      name: 'Luke Howsam',
      summary: 'Personal portfolio',
    },
    description: 'My personal portfolio',
    siteUrl: 'https://lhowsam.com',
    social: {
      twitter: 'lukeH_1999',
      github: 'luke-h1',
      linkedin: 'https://www.linkedin.com/in/lukehowsam/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'skill',
        path: `${__dirname}/src/data`,
      },
    },

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-plugin-styled-components',
          'gatsby-transformer-json',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    'gatsby-plugin-feed',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Luke H portfolio',
    //     short_name: 'lukeH',
    //     start_url: '/',
    //     background_color: '#ffffff',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     // icon: 'content/assets/gatsby-icon.png',
    //   },
    // },
    'gatsby-plugin-react-helmet',
  ],
};