import React from 'react';
import styled from 'styled-components';
import Base from '../layouts/base';

class Index extends React.Component {
  render() {
    const { location }  = this.props;
    
    return (
      <Base location={location}>
        <div className="Post" style={{ height: '2000px' }}>
          shit inside
        </div>
      </Base>
    );
  }
}

export default Index;
