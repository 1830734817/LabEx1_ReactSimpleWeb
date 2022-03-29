/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import { autorun } from 'mobx'
import React,{useState,useEffect} from 'react'
import store from '../mobx/store'
export default function Cinemas(props) {

    // const [cityName] = useState("")

    const [cinemaList,setCinemaList] = useState([])


    useEffect(() => {
        // if(store.getState)
        if(store.list.length===0){
            store.getList()
        }

        autorun(()=>{
            console.log(store.list)
            setCinemaList(store.list)
        })

        return ()=>{
            //取消订阅？
            // unsubscribe() 
        }

    }, [])

    return (
        <div>

            {
                  cinemaList.map(item=>
                    <dl key={item.cinemaId} style={{padding:"10px"}}>
                        <dt>{item.name}</dt>
                        <dd style={{fontSize:"12px",color:"gray"}}>{item.address}</dd>
                    </dl>    
                )
            }
        </div>
    )
}
