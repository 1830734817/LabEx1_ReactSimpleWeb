import React, { Component } from 'react'

export default class App extends Component {
  
  getStudetData=()=>{
    
  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudetData}>点我获取学生数据</button>  
      </div>
    )
  }
}
