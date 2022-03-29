import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Nav from './components/Nav'
import Table1 from './pages/Table1'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Row>
          <Nav/>
          <Table1/>
        </Row>
      </div>
    )
  }
}
