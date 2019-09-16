import styled from 'styled-components';

const MainContent = styled.div`
  padding: 1.5rem 0.5rem;
  /* maybe take in font here too */
  font-size: 16px;
  font-family: ${props => props.theme.fontPost};
  line-height: 1.35;

  display: grid;
  grid-row-gap: 5rem;

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    padding: 1.5rem 20px;
  }

  /* this is where shit goes sourz */
  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    padding: 1.5rem 28px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 1.5rem 30px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding: 1.5rem 160px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    padding: 1.5rem 350px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    padding: 1.5rem 480px;
  }
`;

export default MainContent;
