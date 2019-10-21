let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful');
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  );
}

// https://www.gatsbyjs.org/packages/gatsby-source-contentful/

module.exports = {
  siteMetadata: {
    title: 'Internationally Gringo',
    titleTemplate: '%s · Internationally Gringo',
    description:
      "My name is Aylan Mello and I'm trying out traveling full time and location-independent living. I chronicle my trials and tribulations here, as well as some dope picks on travel and culture.",
    keywords: 'travel,world,blog,writing,local,adventure',
    // get rid of this final / at yr own discretion
    url: 'https://www.intlgringo.com/',
    twitterUsername: '@og_gringo',
    image:
      'https://res.cloudinary.com/burncartel/image/upload/c_fit,q_700,w_2200/v1561453037/gringo-sintra.jpg'
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: contentfulConfig.spaceId,
        accessToken: contentfulConfig.accessToken
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Muli', 'Quicksand', 'Montserrat', 'Poppins']
        }
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src:
          'https://www.instagram.com/static/bundles/es6/EmbedSDK.js/2fe3a16f6aeb.js',
        onLoad: `() => { console.log('loaded embed library'); }`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 20,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: true,
              providers: {
                include: ['Instagram'],
                settings: {
                  // Ex. Hide all Instagram comments by default
                  Instagram: { hidecaption: true, omitscript: true }
                }
              }
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    }
  ]
};
