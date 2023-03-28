// 创建“外壳”组件App
import React,{Component} from 'react'
// import Hello from './components/Hello/Hello'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css'
// 创建并暴露App组件
export default class App extends Component{
  // 初始化状态
  state={
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'敲代码',done:false},
    ]
  }
  // addTodo用于添加一个todo,接受的参数是todo对象
  addTodo=(todoObj)=>{
    // 获取原todos
    const {todos}=this.state
    // 追加一个todo
    const newTodos=[todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }
    render(){
      const {todos}=this.state
        return(
            <div className="todo-container">
            <div className="todo-wrap">
              <Header add={this.addTodo}/>
              <List todos={todos}/>
              <Footer/>
            </div>
          </div>
        )
    }
}
