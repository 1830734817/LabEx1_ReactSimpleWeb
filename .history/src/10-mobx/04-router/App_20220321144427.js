/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
// import { autorun } from 'mobx'
// import store from './mobx/store'
import { inject,observer } from 'mobx-react'


//构建一个父组件-高阶组件 mobx-react

@inject("store")
@observer
class App extends Component {
    
    // store.subsribe 订阅
    // state = {
    //     isShow:false
    // }

    componentDidMount() {
        // autorun(()=>{
        //     console.log(store.isTabbarShow)

        //     this.setState({
        //         isShow:store.isTabbarShow
        //     })
        // })
        // console.log(this.props.store)
    }
    

    render() {
        return (
           <div>
                {/* 其他的内容 */}
                <MRouter>
                    {this.props.store.isTabbarShow && <Tabbar></Tabbar>}
                </MRouter>
           </div>
        )
    }
}

export default App

/*
 /films ===>Films
 /cinemas ===>Cinemas
 /center ===> Center


 
*/