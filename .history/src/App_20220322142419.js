import React, { Component } from 'react'
import { Row, Col } from 'antd';
import {Route,Redirect} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Personal from './pages/Personal'
import Table2 from './pages/Table2'
import Table3 from './pages/Table3'

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
            <Route path="/Personal" component={Personal}/>
            <Route path="/Table2" component={Table2}/>
            <Route path="/Table3" component={Table3}/>
            <Redirect to="/Personal"/>
          </Col> 
        </Row>
      </div>
    )
  }
}
