import React from 'react';
import styled from 'styled-components';
import Base from '../layouts/base';

const PostContent = styled.div`
  border: 1px solid black;
  padding: 0.5rem 0.5rem;
  font-family: ${props => props.theme.fontPost};
  font-size: 14px;
  line-height: 1.3;
  /* so default will be <= props.theme.breakpoint.mobile.XS / 380px */

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    border: 1px solid red;
    padding: 0.5rem 0.7rem;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    border: 1px solid violet;
    padding: 1.5rem 25px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    border: 1px solid aqua;
    padding: 1rem 1.5rem;
    padding: 1.5rem 30px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    border: 1px solid brown;
    padding: 1.5rem 160px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tabletWide}) {
    border: 1px solid orange;
  }
  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    border: 1px solid yellow;
    padding: 1.5rem 350px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    border: 1px solid green;
    padding: 1.5rem 480px;
  }
`;

class BlogPost extends React.Component {
  render() {
    const { location } = this.props;
    
    return (
      <Base location={location}>
        <div
          className="Post"
          style={{ height: '2000px', border: '1px solid blue' }}
        >
          BLOG PAGE before content
          <PostContent>
            <p className="inner-content" style={{border: '1px solid yellow'}}>
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