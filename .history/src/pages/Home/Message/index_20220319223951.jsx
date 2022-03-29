import React, { Component } from 'react'
import Detail from './Detail'

export default class Message extends Component {
  state={
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'03',title:'消息2'},
      {id:'02',title:'消息3'}
    ]
  }
  render() {
    const {messageArr}=this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return(
                <li key={msgObj.key}>
                 <a href="xxxxx">{msgObj.title}</a>&nbsp;&nbsp;
                </li>
              )
            })  
          }
        </ul>
        <Detail/>
      </div>
    )
  }
}
