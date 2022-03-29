import React, { Component } from 'react'
import Search from './components/Search/inedx'
import List from './components/List/inedx'

export default class App extends Component {

  //更新app的state
  updateAppState=(stateObj)=>{
    this.setState(stateObj);

  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List  {...this.state}/>
      </div>
    )
  }
}
