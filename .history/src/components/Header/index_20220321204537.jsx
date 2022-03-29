import React, { Component } from 'react'
import { PageHeader } from 'antd'

export default class Header extends Component {
  render() {
    return (
        <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    )
  }
}


