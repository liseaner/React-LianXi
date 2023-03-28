// 创建“外壳”组件App
import React,{Component} from 'react'
import Hello from './components/Hello/Hello'
// 创建并暴露App组件
export default class App extends Component{
    render(){
        return(
            <div>
             <Hello/>
            </div>
        )
    }
}
