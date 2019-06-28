import React from 'react';
import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import MainContent from '../layouts/main_content';
import Base from '../layouts/base';
import Hero from '../components/hero';

const PostTitleContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 15px 40px;

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    padding: 15px 43px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    padding: 15px 95px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 15px 98px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding: 15px 100px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tabletWide}) {
    padding: 15px 175px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    padding: 15px 275px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    padding: 15px 425px;
  }
`;

const PostTitle = styled.span`
  font-family: ${props => props.theme.fontSubheader};
  text-align: center;
  font-size: 35px;
  line-height: 1.25;
  font-weight: bold;
  padding: 1rem;
  /* border: 1px solid red; */
`;

const PostTagsContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  padding: 10px 10px;

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    padding: 10px 95px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 10px 98px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding: 10px 100px;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileXS}) {
    padding: 10px 0;
    display: block;
  }
`;

const PostTags = styled.div`
  /* border: 1px solid red; */
  div:not(:last-child) {
    margin-right: 20px;
  }
`;

const PostTag = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fontSubheader};
  font-size: 14px;
  border: 1px solid gray;
  border-radius: 100px;
  padding: 10px 15px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileXS}) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const PostText = styled.div`
  line-height: 1.6;

  figcaption {
    max-width: 400px;
    font-size: 13px;
    padding-left: 10px;
    margin-top: -20px;
  }

  img {
    max-width: 100%;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  blockquote {
    font-size: 1.1em;
    width: 75%;
    margin: 22px auto;
    font-family: ${props => props.theme.fontSubheader};
    font-style: italic;
    color: #555555;
    border-left: 8px solid #78c0a8;
    line-height: 1.6;
    position: relative;
    background: #ededed;
    padding: 1.2rem;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const { location } = this.props;

    const post = get(this.props, 'data.contentfulBlogPost');
    const country = post.place && post.place.country;
    const { tags } = post;

    const disqusShortname = 'intlgringo';
    const disqusConfig = {
      identifier: post.id,
      title: post.title
    };

    return (
      <Base location={location}>
        <div className="Post">
          <PostTagsContainer className="PostTagsContainer">
            <PostTags className="PostTags">
              {tags.map(tag => (
                <PostTag>{tag}</PostTag>
              ))}
            </PostTags>
          </PostTagsContainer>
          <PostTitleContainer className="PostTitleContainer">
            <PostTitle className="PostTitle">{post.title}</PostTitle>
          </PostTitleContainer>
          <Hero className="Hero" src={post.heroImage.sizes.src} />
          <MainContent>
            <PostText
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </MainContent>
        </div>
      </Base>
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
        sizes {
          src
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



