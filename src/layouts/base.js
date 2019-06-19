import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Header from '../components/header';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: 10px;  
  }
`;

// how do we set the media query breakpoints to be
// universally accessible here?

const theme = {
  color: 'black',
  background: 'yellow',
  width: '400px',
  fontDefault: 'sans-serif',
  fontHeader: 'Quicksand'
};

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.background};

  @media (min-width: 380px) {
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
  }
`;

const PageContent = styled.div``;

class Base extends React.Component {
  render() {
    const { children, location } = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="Wrapper">
          <GlobalStyle />
          <Header withHero={location.pathname === '/'} />
          <PageContent className="PageContent">{children}</PageContent>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default Base;
