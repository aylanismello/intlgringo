import React from 'react';
// import get from 'lodash/get';
// import Helmet from 'react-helmet';
// import Hero from '../components/hero';
// import Stats from '../components/stats';
// import ArticlePreview from '../components/article-preview';

class RootIndex extends React.Component {
  render() {
    // const { title, description, keywords } = get(this, 'props.data.site.siteMetadata');
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    // const bannerImg = get(this, 'props.data.allContentfulBannerImg.edges')[0];

    // const places = get(this, 'props.data.allContentfulPlace.edges');
    // const countries = get(this, 'props.data.allContentfulCountry.edges');

    return (
      <div>
        ok
       
      </div>
    );
  }
}

export default RootIndex;

// export const pageQuery = graphql`
//   query HomeQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulPlace {
//       edges {
//         node {
//           city
//           country {
//             name
//           }
//         }
//       }
//     }
//     allContentfulCountry {
//       edges {
//         node {
//           name
//         }
//       }
//     }
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulSizes_tracedSVG
//             }
//           }
//         }
//       }
//     }
//     allContentfulBannerImg {
//       edges {
//         node {
//           title
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//           heroImage {
//             sizes(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulSizes_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `;
