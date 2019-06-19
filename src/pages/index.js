import React from 'react';
import styled from 'styled-components';
import Base from '../layouts/base';

class Index extends React.Component {
  render() {
    const { location }  = this.props;
    
    return (
      <Base location={location} >
        <p>This is just some child text</p>
      </Base>
    );
  }
}

export default Index;
