import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
      </div>
    )
  }
}
