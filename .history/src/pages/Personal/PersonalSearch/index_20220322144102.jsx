import React, { Component } from 'react'
import { Input } from 'antd'

const { Search } = Input;

export default class PersonalSearch extends Component {
  render() {
    return (
        <Search placeholder="input search text" enterButton />
    )
  }
}
