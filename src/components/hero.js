import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const homePageImg =
  'https://res.cloudinary.com/burncartel/image/upload/c_fit,q_700,w_2200/v1561453037/gringo-sintra.jpg';
  // 'https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70,w_2000/intl_gringo_banner_1';

const HeroContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoint.tabletWide}) {
    padding: ${props => (props.isHeader ? '' : '0 115px')};
  }

  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    padding: ${props => (props.isHeader ? '' : '0 200px')};
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    padding: ${props => (props.isHeader ? '' : '0 300px')};
  }
`;

const HeroStyle = styled.div`
  position: relative;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)); */
  background-image: url(${props => props.src || homePageImg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: ${props => (props.isHeader ? 'inherit' : '350px')};
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
  font-size: 14px;
`;

const Hero = ({ isHeader, src }) => (
  <HeroContainer className="HeroContainer" isHeader={isHeader}>
    <HeroStyle className="HeroStyle" src={src}>
      {isHeader && (
        <LocationText>
          <HeroText className="HeroText">
            Domestically exotic, internationally gringo.
          </HeroText>
          <Link to="/blog/top-5-places-i-visited-in-2018">
            <LocationTextContainer className="LocationTextContainer">
              <LocationText className="LocationText">
                📍 Sintra, Portugal{' '}
              </LocationText>
            </LocationTextContainer>
          </Link>
        </LocationText>
      )}
    </HeroStyle>
    {/* maybe add caption option here too 🦍 */}
  </HeroContainer>
);

export default Hero;
