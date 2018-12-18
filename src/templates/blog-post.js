import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { DiscussionEmbed } from 'disqus-react';
import styles from './blog-post.module.css';
import './blog-post.css';

import heroStyles from '../components/hero.module.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { country } = post.place;
    const { tags } = post;
    const disqusShortname = 'intlgringo';
    const disqusConfig = {
      identifier: post.id,
      title: post.title,
    };

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            sizes={post.heroImage.sizes}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p style={{ display: 'block', fontWeight: 600 }}>
            {country.name} {country.flag}{' '}
            {tags && tags[0] ? `/ ${tags[0].toUpperCase()}` : ''}
          </p>
          <p style={{ display: 'block' }}>{post.publishDate}</p>
          <div
            className="postContent"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  # https://www.contentful.com/developers/docs/concepts/data-model/
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      place {
        country {
          name
          flag
        }
        coordinates {
          lat
          lon
        }
        city
      }
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
