import React from 'react';
import Link from 'gatsby-link';
import Base from '../layouts/base';
import MainContent from '../layouts/main_content';

class PageNotFound extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Base location={location}>
        <MainContent>
          <h2 style={{ padding: '0', margin: '0' }}>Hmmm... think we got lost finding that page yo.</h2>
          <h3 style={{ padding: '0', margin: '0', textDecoration: 'underline' }}> <Link to="/">Go home 🏠</Link> </h3>
          {/* <br/> */}
          {/* <br/> */}
          {/* <br/> */}
          <br/>
          <img src="https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif?itemid=10251428"/>
        </MainContent>
      </Base>
    );
  }
}

export default PageNotFound;
