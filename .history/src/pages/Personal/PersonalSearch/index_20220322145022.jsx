import React, { Component } from 'react'
import { Input } from 'antd'

const { Search } = Input;

export default class PersonalSearch extends Component {
  render() {
    return (
        <Search placeholder="输入想要查找的个人信息" allowClear style={{ width: 200,marginLeft:10+'vw'}} enterButton />
    )
  }
}
