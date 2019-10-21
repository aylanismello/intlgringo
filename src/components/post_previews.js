import styled from 'styled-components';
import React from 'react';
import Link from 'gatsby-link';
import { genCloudinary } from '../helpers/image_helper';

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
  font-family: ${props => props.theme.fontSubheader};
  line-height: 1.4;
  padding-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }

  .PostPreviewTag {
    color: #324fca;
    letter-spacing: 1.2px;
    font-size: 0.8em;
    font-weight: 600;
  }

  .PostPreviewTitle {
    font-size: 16px;
    font-weight: 800;

    /* font-size: 16px;
    font-weight: 500; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .PostPreviewHeroImg {
    width: 100%;
    max-height: 300px;
  }
`;

const PostPreviewImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150px;
  margin-bottom: .6rem;
`;

const PostPreview = ({ title, heroImg, mainTag }) => (
  <PostPreviewStyle>
    <PostPreviewImg src={heroImg} className="PostPreviewImg" />
    <div className="PostPreviewTag"> {mainTag.toUpperCase()} </div>
    <div className="PostPreviewTitle">{title}</div>
  </PostPreviewStyle>
);

const PostPreviews = ({ posts }) => {
  return (
    <PostPreviewsStyle>
      {posts.map(post => (
        <Link to={`/blog/${post.slug}`} key={`${post.slug}-link`}>
          <PostPreview
            key={post.slug}
            title={post.title}
            heroImg={genCloudinary(post.heroImgName, { q: 70, w: 600 })}
            mainTag={post.tags && post.tags[0] ? post.tags[0] : ''}
          />
        </Link>
      ))}
    </PostPreviewsStyle>
  );
};

export default PostPreviews;
