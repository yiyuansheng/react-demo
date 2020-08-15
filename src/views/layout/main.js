import React, { Component } from 'react'
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home'
import UserList from '../user/list'
import MusicList from '../music/index'
import './main.scss'

const { Content } = Layout;
class Main extends Component {
  render() {
    return (
      <Content
        className="site-layout-background main"
      >
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/user/list" component={UserList} />
          <Route path="/music/list" component={MusicList} />
          {/* 重定向到首页 */}
          <Redirect from="*" to="/home"/>
        </Switch>
      </Content>
    )
  }
}

export default Main