import React from 'react';
import Img from 'gatsby-image';

import styles from './hero.module.css';

export default ({ data }) => (
  <div>
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      sizes={data.heroImage.sizes}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.title}</h3>
   
    </div>
  </div>
    <div
      className={styles.heroDescription}
      dangerouslySetInnerHTML={{
        __html: data.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
