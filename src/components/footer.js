import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background: black;
  color: white;
  height: 70px;
  font-family: ${props => props.theme.fontSubheader};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  > a {
    margin: 0 7px 0 7px;
    padding: 3px;
  }
`;

const HANDLES = {
  IG: 'https://www.instagram.com/oi_gringo/',
  TWITTER: 'https://twitter.com/oi_gringo/'
};

export default () => (
  <Footer className="Footer">
    <a href={HANDLES.IG} target="_blank">
      instagram 📷
    </a>
    <a href={HANDLES.TWITTER} target="_blank">
      twitter 🐦
    </a>
  </Footer>
);
