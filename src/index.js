import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css'; // 阿里云控制台主题
import 'antd/dist/antd.dark.css'; // 暗黑主题
// import 'antd/dist/antd.compact.css'; //紧凑主题
import './App.scss';
import Routers from './routers.js'
import * as serviceWorker from './serviceWorker';
let abc = 2
console.log(Routers, 2);
console.log(3);

ReactDOM.render(
  // 严格模式
  // <React.StrictMode>
  //   <Routers />
  // </React.StrictMode>,
  <Routers />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
