import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Header from '../components/header';
import Footer from '../components/footer';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: 10px;  
  }

  a {
    text-decoration: none; 
    color: inherit;
  }
`;

// how do we set the media query breakpoints to be
// universally accessible here?

const theme = {
  breakpoint: {
    mobileXS: '380px',
    mobileS: '420px',
    mobileM: '580px',
    mobileL: '660px',
    tablet: '780px',
    tabletWide: '1000px',
    desktop: '1200px',
    desktopWide: '1600px'
  },
  headerTextHeight: '72px',
  fontDefault: 'sans-serif',
  fontPost: `'Montserrat', sans-serif`,
  fontHeader: `'Quicksand', sans-serif`,
  fontSubheader: 'Poppins',
  fontLocation: `'Dancing Script', cursive`
};

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.background};

  /* TODO: THIS MEDIA QUERY SHIT IS ALL WRONG FIX PLEASE THANKS */

  /* @media (min-width: 380px) {
    margin: 4rem;
  }

  @media (min-width: 420px) {
    margin: 4rem;
  }

  @media (min-width: 660px) {
    margin: 4rem;
  }

  @media (min-width: 780px) {
    margin: 5rem;
  }

  @media (min-width: 1000px) {
    margin: 12rem;
  }

  @media (min-width: 1200px) {
    margin: 24rem;
  } */
`;

const Page = styled.div`
  margin-top: ${props => (props.withHero ? '0px' : props.theme.headerTextHeight)};

`;

class Base extends React.Component {
  render() {
    const { children, location } = this.props;
    const withHero = location.pathname === '/';

    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="Wrapper">
          <GlobalStyle />
          <Header withHero={withHero} />
          <Page withHero={withHero} className="Page">
            {children}
          </Page>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default Base;
