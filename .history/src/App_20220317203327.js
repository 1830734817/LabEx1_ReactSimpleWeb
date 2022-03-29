import React, { Component } from 'react'
import Search from './components/Search/inedx'
import List from './components/List/inedx'

export default class App extends Component {

  //初始化状态
  state={
    users:[],//users初始值为数组
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//表示是否处于加载中
    err:''//存储请求相关的错误信息
  }

  saveUsers=(users)=>{
    this.setState({users:users});
  }

  changeisFirst=(users)=>{
    this.setState({users:users});
  }
  
  schangeisLoading=(users)=>{
    this.setState({users:users});
  }
  
  saveerr=(users)=>{
    this.setState({users:users});
  }



  render() {
    const {users}=this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers}/>
        <List isFirst={this.} users={users}/>
      </div>
    )
  }
}
