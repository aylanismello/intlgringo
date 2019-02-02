import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import ArticlePreview from '../components/article-preview';

class RootIndex extends React.Component {
  render() {
    const { title, description, keywords } = get(this, 'props.data.site.siteMetadata');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const bannerImg = get(this, 'props.data.allContentfulBannerImg.edges')[0];

    return (
      <div style={{ background: '#fff'}}>
        <Helmet>
          <title> {title} </title>
          <meta property="og:title" content={title} />
          <meta charset="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <Hero data={bannerImg.node} />
        <div className="wrapper">
          <h2 className="section-headline">The latest</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAylanTravelStatus(sort: { fields: [dateArrived], order: DESC } ) {
      edges {
        node {
          summary
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
    allContentfulBannerImg {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
