import React, { Component } from 'react'
import Search from './components/Search/inedx'
import List from './components/List/inedx'

export default class App extends Component {

  state={users:[]}//初始化状态，users初始值为数组

  saveUsers=(users)=>{


    this.setState({users:users});
  }

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers}/>
        <List/>
      </div>
    )
  }
}
