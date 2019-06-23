import styled from 'styled-components';
import React from 'react';
import Link from 'gatsby-link';

const PostPreviewsStyle = styled.div`
  /* border: 1px solid pink; */

  /* default here is the largest, widest screen */
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 25px;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoint.tabletWide}) {
    grid-template-columns: 47% 47%;
    grid-gap: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 2rem 2rem;
    grid-template-columns: 98%;
    grid-gap: 25px;
  }
`;

const PostPreviewStyle = styled.div`
  /* border: 1px solid green; */
  font-family: ${props => props.theme.fontSubheader};
  line-height: 1.6;
  &:hover {
    cursor: pointer;
  }

  .PostPreviewTag {
    color: #324fca;
    font-weight: 600;
  }

  .PostPreviewTitle {
    font-size: 20px;
    font-weight: 800;
  }

  .PostPreviewHeroImg {
    width: 100%;
    max-height: 300px;
  }
`;

const PostPreview = ({ title, heroImg, mainTag }) => (
  <PostPreviewStyle>
    <img src={heroImg} className="PostPreviewHeroImg" />
    <div className="PostPreviewTag"> {mainTag.toUpperCase()} </div>
    <div className="PostPreviewTitle">{title}</div>
  </PostPreviewStyle>
);

const PostPreviews = ({ posts }) => {

  console.log(posts.tags);

  return (
    <PostPreviewsStyle>
      {posts.map((post) => (
        <Link to="/b">
          <PostPreview
            title={post.title}
            heroImg="https://res.cloudinary.com/burncartel/image/upload/c_scale,q_65,w_800/v1548385339/bc_weekly_80_cover.jpg"
            mainTag={(post.tags && post.tags[0]) ? post.tags[0] : ''}
          />
        </Link>
      ))}
    </PostPreviewsStyle>
  );
};

export default PostPreviews;
