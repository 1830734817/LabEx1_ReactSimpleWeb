import React, { Component } from 'react'
import { Row, Col } from 'antd';
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Table1 from './pages/Table1'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Row>
          <Col span={4}>
            <Nav/>
          </Col>
          <Col span={20}>
            <Route path="/Table1" component={Table1}/>
            <Route path="/Table2" component={Table2}/>
            <Redirect to="/about"/>
          </Col> 
        </Row>
      </div>
    )
  }
}
