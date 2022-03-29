import React, { Component } from 'react'
import { PageHeader } from 'antd'

export default class Header extends Component {
  render() {
    return (
        <PageHeader
        // style={{border: "1px solid rgb(235, 237, 240)"}}
        className="site-page-header"
        title="React"
        subTitle="增删改查页面"
      />
    )
  }
}




