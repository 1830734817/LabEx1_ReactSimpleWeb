import React, { Component } from 'react'
import { Input } from 'antd'

export default class PersonalSearch extends Component {
  render() {
    return (
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
    )
  }
}
