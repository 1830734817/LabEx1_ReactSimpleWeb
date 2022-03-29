import React, { Component } from 'react'


const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'},
]

export default class Detail extends Component {
  render() {
      //接收params参数
      const {id,title}= this.props.match.params
      const findResult = DetailData.find((detailObj)=>{
          return detailObj.id===id
      })
    return (
      <div>
          <ul>
              <li>ID:{id}</li>
              <li>TITLE:{title}</li>
              <li>COTENT:{findResult.content}</li>
          </ul>
      </div>
    )
  }
}
