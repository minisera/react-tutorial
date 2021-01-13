import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {
  // render() {
    return (
      <>
        <Article 
        title="React"
        // そのまま渡すと無限ループおきる
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
  // }
}

export default Blog