import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { DiscussionEmbed } from 'disqus-react';
import styles from './blog-post.module.css';

import heroStyles from '../components/hero.module.css';

class Country extends React.Component {
  render() {
    const { name, flag }= get(this.props, 'data.contentfulCountry');
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    // const country = post.place && post.place.country;
    // const { tags } = post;
    const tags = [ name ];
    // const disqusShortname = 'intlgringo';
    // const disqusConfig = {
    //   identifier: post.id,
    //   title: post.title,
    // };

    // gist.github.com/lancejpollard/1978404
    // https: // https://www.splashcopywriters.com/blog/meta-description
    return (
      <div style={{ background: '#fff' }}>
        <Helmet>
          <title>{`${name}`}</title>
          <meta name="description" content="I wish I could properly show descriptions" />
          <meta
            name="keywords"
            content={tags && tags[0] && tags.map(tag => `${tag}`)}
          />
          <meta name="author" content="Aylan Mello, hi@aylan.io" />
          <meta name="language" content="EN" />
          <meta name="subject" content="travel" />
        </Helmet>
        {/* <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            sizes={post.heroImage.sizes}
          />
        </div> */}
        <div className="wrapper">
          <h1 className="section-headline"> {flag} {name}</h1>
          {/* <p style={{ display: 'block', fontWeight: 600 }}>
            {country && `${country.name} ${country.flag} / `}
            {tags && tags[0] ? `${tags[0].toUpperCase()}` : ''}
          </p>
          <p style={{ display: 'block' }}>{post.publishDate}</p>
          <div
            className="postContent"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
        </div>
      </div>
    );
  }
}

export default Country;

export const pageQuery = graphql`
  # https://www.contentful.com/developers/docs/concepts/data-model/
  query CountryByName($name: String!) {
    contentfulCountry(name: { eq: $name }) {
      name
      flag
    }
  }
`;
