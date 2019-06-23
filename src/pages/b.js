import React from 'react';
import styled from 'styled-components';
import Base from '../layouts/base';
import Hero from '../components/hero';

const PostContent = styled.div`
  /* border: 1px solid black; */
  padding: 0.5rem 0.5rem;
  font-family: ${props => props.theme.fontPost};
  font-size: 1.5rem;
  line-height: 1.4;
  /* so default will be <= props.theme.breakpoint.mobile.XS / 380px */

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    /* border: 1px solid red; */
    padding: 0.5rem 0.7rem;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    /* border: 1px solid violet; */
    padding: 1.5rem 25px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    /* border: 1px solid aqua; */
    /* padding: 1rem 1.5rem; */
    padding: 1.5rem 30px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    /* border: 1px solid brown; */
    padding: 1.5rem 160px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tabletWide}) {
    /* border: 1px solid orange; */
  }
  
  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    /* border: 1px solid yellow; */
    padding: 1.5rem 350px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    /* border: 1px solid green; */
    padding: 1.5rem 480px;
  }
`;

const PostTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid aqua; */

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
  font-size: 28px;
  font-weight: 600;
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
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 100px;
  padding: 10px 15px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileXS}) {
    /* border:  10px solid yellow; */
  /* padding: 5px 10px; */
    font-size: 14px;
    padding: 5px 10px;
  }
`;

class BlogPost extends React.Component {
  render() {
    const { location } = this.props;
    
    return (
      <Base location={location}>
        <div className="Post">
          <PostTagsContainer className="PostTagsContainer">
            <PostTags className="PostTags">
              <PostTag> 
                Country Name
              </PostTag>
              <PostTag> 
                Tag here too
              </PostTag>
              {/* <PostTag> 
                TAgs dude
              </PostTag> */}
            </PostTags>
          </PostTagsContainer>
          <PostTitleContainer className="PostTitleContainer">
            <PostTitle className="PostTitle">
              The Dopest Title: Here You Are but it’s Super Sick Tho
            </PostTitle>
          </PostTitleContainer>
          <Hero className="Hero" />
          <PostContent>
            <p
              className="inner-content"
              // style={{ border: '1px solid yellow' }}
            >
              Prow scuttle parrel provost Sail ho shrouds spirits boom
              mizzenmast yardarm. Pinnace holystone mizzenmast quarter
              crow's nest nipperkin grog yardarm hempen halter furl. Swab
              barque interloper chantey doubloon starboard grog black jack
              gangway rutters. Deadlights jack lad schooner scallywag dance
              the hempen jig carouser broadside cable strike colors. Bring a
              spring upon her cable holystone blow the man down spanker
              Shiver me timbers to go on account lookout wherry doubloon
              chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm
              spyglass sheet transom heave to. Trysail Sail ho Corsair red
              ensign hulk smartly boom jib rum gangway. Case shot Shiver me
              timbers gangplank crack Jennys tea cup ballast Blimey lee snow
              crow's nest rutters. Fluke jib scourge of the seven seas
              boatswain schooner gaff booty Jack Tar transom spirits.
            </p>
          </PostContent>
        </div>
      </Base>
    );
  }
}

export default BlogPost;