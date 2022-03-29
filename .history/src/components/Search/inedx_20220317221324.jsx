import React, { Component } from 'react'
import PubSub, { publishSync } from 'pubsub-js'
import axios from'axios'

export default class Search extends Component {


  search=()=>{
    //获取用户的输入(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}}=this;
    //发送请求前通知List更新状态
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})
    //发送网络请求
    //axios
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   response=>{
    //     //请求成功后通知List更新状态
    //     PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
    //   },
    //   error=>{
    //     //请求失败后通知List更新状态
    //     PubSub.publish('atguigu',{isLoading:false,err:error})
    //   }
    // )
    
    //fetch
    fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response=>{
        console.log('联系服务器成功了')
        return response.json()
      },
      error=>{
        console.log('联系服务器失败了',error)
        return new Promise(()=>{})
      }
        
    ).then(
      response=>{console.log('获取数据成功',response)},
      error=>{console.log('获取数据失败',error)}
    )

  }

  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
             <input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
             <button onClick={this.search}>搜索</button>
            </div>
        </section>
    )
  }

}
