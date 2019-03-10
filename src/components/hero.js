import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import styles from './hero.module.css';

const Definition = styled.article`
  width: 300px;
  /* height: 300px; */
  /* text-align: center; */
  margin: 0 auto;
`;

const Word = styled.div`
  font-size: 2rem;
`;

const Pronunciation = styled.div`
  font-size: 1rem;
`;
const MoreInfo = styled.div`
  font-style: italic;
`;

const RealDef = styled.div`
  font-size: .8rem;
`;

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
    <Definition>
      <Word>grin·go</Word>
      <Pronunciation>/ˈɡriNGɡō/</Pronunciation>
      <MoreInfo> noun</MoreInfo>
      <RealDef>Portuguese - literally ‘foreign, foreigner, or gibberish’.</RealDef>
    </Definition>
    {/* <div
      className={styles.heroDescription}
      dangerouslySetInnerHTML={{
        __html: data.description.childMarkdownRemark.html,
      }}
    /> */}
  </div>
);
