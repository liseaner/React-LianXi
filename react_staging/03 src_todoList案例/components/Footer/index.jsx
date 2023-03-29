import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  // 全选的回调
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  // 清楚已完成
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {todos}=this.props
    // 已完成的个数
    const doneCount=todos.reduce((pre,todo)=>{return pre+(todo.done?1:0)},0)
    console.log('已完成的个数',doneCount)
    // 总数
    const total=todos.length
    return (
        <div className="todo-footer">
                <label>
                  <input type="checkbox" checked={total===doneCount&&total!==0?true:false} onChange={this.handleCheckAll}/>
                </label>
                <span>
                  <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
