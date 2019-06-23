import React from 'react';
import styled from 'styled-components';
import MainContent from '../layouts/main_content';
import Base from '../layouts/base';

const AylanPic = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 15px;
  position: relative;
  /* padding: 5px 20px; */
  /* padding: 0 30px; */
  
`;

const AylanEmoji = styled.div`
  /* font-size: 7rem;
  position: absolute;
  bottom: -90px;
  right: 50px; */
`;

const AylanDescription = styled.div`
`;

const AylanBio = styled.div`
  /* http://grid.malven.co/ */
  border: 1px solid red;
  display: grid;
  grid-template-columns: 40% auto;
  grid-template-rows: auto;
  grid-gap: 50px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoint.mobileM}) {
    /* border: 5px solid green; */
    grid-template-columns: auto;
    justify-items: center;
  }
`;

class Index extends React.Component {
  render() {
    const { location } = this.props;
    
    return (
      <Base location={location}>
        <div className="Index">
          <MainContent className="PageContent">
            <AylanBio className="AylanBio">
              {/* <div className="AylanPicContainer"> */}
              <AylanPic
                src="https://res.cloudinary.com/burncartel/image/upload/c_scale,q_65,w_600/v1561276078/aylan_1_pai.jpg"
                className="AylanPic"
              />

              <AylanDescription className="AylanDescription">
                Hi. My name is Aylan Mello and I travel the world so <span style={{ fontStyle: "italic" }}> you
                don’t have to. </span>
                <br/ > 
                <br/ > 
                Or maybe… I will be the final push. That
                last push you needed to quit your office job and join the
                Digital Nomads and Backpackers I find myself amongst these
                days. 
                
                <br />
                <br />
                So welcome to Internationally Gringo - where you fit
                in everywhere and nowhere. And since you asked - 
                <a href="https://super.abril.com.br/mundo-estranho/por-que-estrangeiro-e-chamado-de-gringo/" target="_blank"> “gringo” is
                Brazilian slang for foreigner. </a>
              </AylanDescription>
              {/* <AylanEmoji className="AylanEmoji">
                👋
              </AylanEmoji> */}
              {/* </div> */}
            </AylanBio>
          </MainContent>
        </div>
      </Base>
    );
  }
}

export default Index;
