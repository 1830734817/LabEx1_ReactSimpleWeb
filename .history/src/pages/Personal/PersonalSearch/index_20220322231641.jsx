import React, { Component } from 'react'
import { Input } from 'antd'

const { Search } = Input;

export default class PersonalSearch extends Component {
  state={
    searchName:''
  }
  render() {
    return (
        <Search placeholder="输入想要查找信息的Name" allowClear style={{ width: 400,marginLeft:25+'vw',marginTop:4+'vh',marginBottom:2+'vh'}} enterButton />
    )
  }
}
