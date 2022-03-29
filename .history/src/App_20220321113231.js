import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

//对于普通类型数据的监听
var observableNumber = observable.box(10)

autorun(()=>{
  console.log(observableNumber.get())
})

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
