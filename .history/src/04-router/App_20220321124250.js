/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import { autorun } from 'mobx'
export default class App extends Component {


    componentDidMount(){
        autorun(()=>{
            console.log(store.isTabbarShow)
        })
    }

    render() {
        return (
           <div>
                {/* 其他的内容 */}
                <MRouter>
                    <Tabbar></Tabbar>
                </MRouter>
           </div>
        )
    }
}

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/