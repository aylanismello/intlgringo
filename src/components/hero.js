import React from 'react';
import styled from 'styled-components';

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

const LocationTextContainer = styled.div`
  border-radius: 10px;
  background: black;
  opacity: 0.7;
  padding: 7px;
  bottom: 20px;
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LocationText = styled.span`
  font-family: ${props => props.theme.fontLocation};
  color: white;
  /* opacity: 1; */
  font-size: 16px;
`;

const Hero = () => (
  <HeroStyle className="HeroStyle">
    <HeroText className="HeroText">
      Domestically exotic, internationally gringo.
    </HeroText>
    <LocationTextContainer className="LocationTextContainer">
      <LocationText className="LocationText">📍 Some cool place </LocationText>
    </LocationTextContainer>
  </HeroStyle>
);

export default Hero;
