import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class index extends Component {
  render() {
    const {todos}=this.props
    console.log('todos',todos)
    return (
      <ul className="todo-main">
       {
        todos.map(todo=>{
          return <Item key={todo.id} {...todo}/>
        })
       }
    </ul>
    )
  }
}
