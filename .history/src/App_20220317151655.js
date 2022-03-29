import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  
  getStudetData=()=>{
    axios.get('https://ebab06f9-1f87-466a-8bd0-4a35b792a513.mock.pstmn.io/students').then(
      response =>{console.log('成功了',response.data);},
      error =>{console.log('失败了',error);}
    )
  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudetData}>点我获取学生数据</button>  
      </div>
    )
  }
}
