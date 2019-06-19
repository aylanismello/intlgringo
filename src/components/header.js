import React from 'react';
import styled from 'styled-components';

// can be withHero or plain. withHero is only home page

const Header = styled.div`
  position: fixed;
  /* border: 1px solid blue; */
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.withHero ? '340px' : '72px')};
  background: white;
  font-family: ${props => props.theme.fontHeader};
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
`;

const HeaderTextContainer = styled.div`
  position: absolute;
  font-weight: 600;
  height: 72px;
  top: 0;
  left: 20px;
  /* display: flex; */
  width: 100%;
  font-size: 34px;
  color: ${props => (props.withHero ? 'white' : 'black')};
  border: 1px solid orange;
  align-items: center;
  display: flex;

  @media (max-width: 780px) {
    justify-content: center;
    left: 0;
  }
  
`;

const HeaderText = styled.div`
  border: 1px solid purple;
`;

const HeroStyle = styled.div`
  position: relative;
  background-image: url('https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_2000/intl_gringo_banner_1');
  background-size: cover;
  width: 100%;
  height: inherit;
  /* border: 1px solid red; */
`;

const HeroText = styled.span`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: ${props => props.theme.fontSubheader};
  font-size: 24px;
  font-weight: 500;
`;

const Hero = () => (
  <HeroStyle className="HeroStyle">
    <HeroText className="HeroText">
      Domestically exotic, internationally gringo.
    </HeroText>
  </HeroStyle>
);

export default ({ withHero }) => (
  <Header withHero={withHero} className="Header">
    {withHero && <Hero className="Hero" />}
    <HeaderTextContainer withHero={withHero} className="HeaderTextContainer">
      <HeaderText className="HeaderText"> 🌏 intl gringo </HeaderText>
    </HeaderTextContainer>
  </Header>
);
