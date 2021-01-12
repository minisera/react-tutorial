import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  // 公開状態を反転させる
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    });
  };
  componentDidMount(){
    // ボタンがクリックされたらカウントアプする
    document.getElementById("counter").addEventListener("click",this.countUp)
  }
  
  componentDidUpdate() {
    // stateが１０以上になったらカウントを０にする
    console.log(this.state.count);
    if (this.state.count >= 10) {
      this.setState({count: 0})
    }
  }
  
  componentWillUnmount(){
    // ボタンがクリックされたらカウントアプする
    document.getElementById("counter").removeEventListener("click",this.countUp)
  }


  countUp = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <>
        <Article 
        title="React"
        isPublished={this.state.isPublished}
        count= {this.state.count}
        // そのまま渡すと無限ループおきる
        toggle={() => this.togglePublished()}
        />
        
      </>
    )
  }
}

export default Blog