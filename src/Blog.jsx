import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Article 
          title="React"
          isPublished={true}
            />
        <Article order={3}/>
      </>
    )
  }
}

export default Blog