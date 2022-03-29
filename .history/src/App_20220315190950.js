//创建“外壳”组件App
import React from 'react'
const {Component} = React

class App extends Component{
    render(){
        return (
            <div>
                hello,react!
            </div>
        )
    }
}

//暴露App组件
export default App