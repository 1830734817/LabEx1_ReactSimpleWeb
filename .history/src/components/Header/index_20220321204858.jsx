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

.site-page-header {
    border: 1px solid rgb(235, 237, 240);
  }


