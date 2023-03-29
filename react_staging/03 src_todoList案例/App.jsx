// 创建“外壳”组件App
import React,{Component} from 'react'
// import Hello from './components/Hello/Hello'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css'
// 创建并暴露App组件
export default class App extends Component{
  // 状态在哪里，操作状态的方法就在哪里

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

  // uodateTodo用于更新一个todo对象
  updateTodo=(id,done)=>{
    const {todos}=this.state;
   const newTodos=todos.map((todoObj)=>{
      if(todoObj.id==id){
        return{...todoObj,done}
      }else{
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }

  // deleteTodo用于删除一个todo对象
  deleteTodo=(id)=>{
      const {todos}=this.state;
      const newsTodo=todos.filter((todoObj)=>{
        return todoObj.id!==id
      })
      // 更新状态
      this.setState({todos:newsTodo})
  }
  // checkAllTodo用于全选
  checkAllTodo=(done)=>{
    const {todos}=this.state;
    const newsTodos=todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    // 更新状态
    this.setState({todos:newsTodos})
  }
  // 清除所以已选择的
  clearAllDone=()=>{
    const {todos}=this.state
    const newsTodos=todos.filter((todoObj)=>{
      return !todoObj.done
    })
    // 更新状态
    this.setState({todos:newsTodos})
  }
    render(){
      const {todos}=this.state
        return(
            <div className="todo-container">
            <div className="todo-wrap">
              <Header add={this.addTodo}/>
              <List todos={todos}  updateTodo={this.updateTodo}  deleteTodo={this.deleteTodo}/>
              <Footer checkAllTodo={this.checkAllTodo} todos={todos} clearAllDone={this.clearAllDone}/>
            </div>
          </div>
        )
    }
}
