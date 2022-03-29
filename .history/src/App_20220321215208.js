import React, { Component } from 'react'
import { Row, Col } from 'antd';
import {Route,Redirect} from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Table1 from './pages/Table1'
import Table2 from './pages/Table2'
import Table3 from './pages/Table3'
import Table4 from './pages/Table4'

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
            <Route path="/Table3" component={Table3}/>
            <Route path="/Table4" component={Table4}/>
            <Redirect to="/Table1"/>
          </Col> 
        </Row>
      </div>
    )
  }
}
