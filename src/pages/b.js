import React from 'react';
import Base from '../layouts/base';

class BlogPost extends React.Component {
  render() {
    const { location } = this.props;
    
    return (
      <Base location={location}>
        shit inside
      </Base>
    )
  }
}

export default BlogPost;