import React, { Component } from 'react'
import Search from './components/Search/inedx'
import List from './components/List/inedx'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
