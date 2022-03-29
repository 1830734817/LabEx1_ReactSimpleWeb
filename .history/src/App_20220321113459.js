import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

//对于普通类型数据的监听
var observableNumber = observable.box(10)

//第一次执行一次，之后每次改变也会执行
autorun(()=>{
  console.log(observableNumber.get())
})

setTimeout(()=>{
  observableNumber.set(20)
},1000)

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
