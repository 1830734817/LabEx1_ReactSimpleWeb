import {observable,autorun} from 'mobx'

const store = observable(
    {
        isTabbarShow:true,
        list:[],
        cityName:"北京"
    }
)

export default store