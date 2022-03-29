import React, { Component } from 'react'
import './index.css'

export default class List extends Component {

  //初始化状态
  state={
    users:[],//users初始值为数组
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//表示是否处于加载中
    err:''//存储请求相关的错误信息
  }

  render() {
    const {users,isFirst,isLoading,err}=this.state
    return (
        <div className="row">
            {
                isFirst?<h2>欢迎使用，输入关键词，随后点击搜索</h2>:
                isLoading?<h2>Loading..........</h2>:
                err?<h2 style={{color:'red'}}>{err.message}</h2>:
                this.props.users.map((userObj)=>{
                    return(
                        <div key={userObj.id} className="card">
                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
  }
}
