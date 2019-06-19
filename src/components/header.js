import React from 'react';
import styled from 'styled-components';

// can be withHero or plain. withHero is only home page

const Header = styled.div`
  position: fixed;
  border: 1px solid blue;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  font-family: ${props => props.theme.fontHeader};
  font-size: 34px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 0 20px 0 20px; */
`;

const HeaderText = styled.div`
  position: absolute;
  color: ${props => (props.withHero ? 'white' : 'black')};
`;

const Hero = styled.div`
  position: relative;
  background: black;
  width: 100%;
  height: 400px;
`;

export default ({ withHero }) => (
  <Header className="Header" >
    {withHero && <Hero className="Hero" />}
    <HeaderText withHero={withHero} className="HeaderText"> 🌏 intl gringo </HeaderText>
  </Header>
);
