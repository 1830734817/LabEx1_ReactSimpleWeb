import React, { Component } from 'react'
import PersonalTable from './PersonalTable/index'
import PersonalSearch from './PersonalSearch/index'

export default class Personal extends Component {
  render() {
    return (
      <div>
        <PersonalSearch/>
        <PersonalTable/>
        <PersonalAdd/>
      </div>
    )
  }
}
