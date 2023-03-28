import React, { Component } from 'react'
import {nanoid} from 'nanoid'
//生成唯一标识
import './index.css'
export default class index extends Component {
 
  handleKeyUp=(event)=>{
    //结构赋值获取keyCode,target
    const{keyCode,target}=event
    // 判断是否是回车按键
    if(keyCode!==13) return
    if(target.value.trim()===''){
      alert('输入不能为空')
      return
    }
    // 准备好一个TODO对象
    const todoObj={
      id:nanoid,
      name:target.value,
      done:false
    }
    console.log(target.value)
    // 将todoObj传递给App
    this.props.add(todoObj)
    target.value=''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
