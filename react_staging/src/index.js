// 引入react核心库
import React from 'react'
// 引入App组件
import App from './App'
// 引入reactdom
// import  ReactDOM  from 'react-dom'
// 使用createRoot
import {createRoot} from 'react-dom/client';
// import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');

// Create a root.
const root =createRoot(container);



// 渲染App到页面
// ReactDOM.render(<App/>,document.getElementById('root'))
root.render(<App/>)