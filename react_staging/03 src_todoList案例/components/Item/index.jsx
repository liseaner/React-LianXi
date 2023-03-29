import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  state={mouse:false}
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
}
// 勾选、取消某一个todo的回调
handleCheck(id){
  return (event)=>{
    console.log(id,event.target.checked)
    this.props.updateTodo(id,event.target.checked)
  }
}
// 删除一个todo的回调
handleDelete(id){
  console.log('APP应该删除',id)
 if(window.confirm('确定删除吗？')){
  this.props.deleteTodo(id)
 }
}
  render() {
    // const {...todo}=this.props
    // console.log('todo',todo)
    const{id,name,done}=this.props
    const{mouse}=this.state
    return (
      
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)}  onMouseLeave={this.handleMouse(false)}>
        <label>
          <input  type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span >{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
