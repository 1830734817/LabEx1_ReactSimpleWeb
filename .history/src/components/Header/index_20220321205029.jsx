import React, { Component } from 'react'
import { PageHeader } from 'antd'

export default class Header extends Component {
  render() {
    return (
        <PageHeader
        className="增删改查页面"
        title="React"
        subTitle="This is a subtitle"
      />
    )
  }
}




