import React from 'react';
import styled from 'styled-components';
import Base from '../layouts/base';


const PageContent = styled.div``;

class Index extends React.Component {
  render() {
    const { location } = this.props;
    
    return (
      <Base location={location}>
        <div
          className="Index"
          style={{ height: '2000px' }}
        >
          Welcome! this is above the content which receives the standard
          pagging
          <PageContent className="PostContent" >
            <p style={{border: '1px solid blue' }}> 
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
          </PageContent>
        </div>
      </Base>
    );
  }
}

export default Index;
