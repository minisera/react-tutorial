import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {
  // componentDidMount(){
  //   // ボタンがクリックされたらカウントアプする
  //   document.getElementById("counter").addEventListener("click",this.countUp)
  // }
  
  // componentDidUpdate() {
  //   // stateが１０以上になったらカウントを０にする
  //   console.log(this.state.count);
  //   if (this.state.count >= 10) {
  //     this.setState({count: 0})
  //   }
  // }
  
  // componentWillUnmount(){
  //   // ボタンがクリックされたらカウントアプする
  //   document.getElementById("counter").removeEventListener("click",this.countUp)
  // }


  // countUp = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  // render() {
    return (
      <>
        <Article 
        title="React"
        // count= {this.state.count}
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