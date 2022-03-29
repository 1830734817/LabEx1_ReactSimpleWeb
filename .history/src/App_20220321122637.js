import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

//对于普通类型数据的监听
var observableNumber = observable.box(10)
var observableName = observable.box("kerwin")

//第一次执行一次，之后每次改变也会执行
autorun(()=>{
  console.log(observableNumber.get())
})

autorun(()=>{ 
  console.log(observableName.get())
})

setTimeout(()=>{
  
  observableNumber.set(20)
},1000) 

setTimeout(()=>{
  observableName.set("xiaoming")
},2000)

var myobj = observable.map({
  name:"kerwin",
  age:100
})

autorun(()=>{
  console.log("对象的name属性改变了",myobj.get("name"))
})

setTimeout(()=>{
  myobj.set("age",18)
},3000)

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
