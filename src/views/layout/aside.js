import React, { Component } from 'react'
import { Layout, Menu } from 'antd';

import { MenuData } from '../../utils/menu'
import { Link } from 'react-router-dom'
import './aside.scss'

const { Sider } = Layout;
const { SubMenu } = Menu;
class Aside extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <Sider
        trigger={null} collapsible
        collapsed={this.props.collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
        }}
      >
        <div className="logo text-c">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
          <b className='font-l ml-1x'
            style={{ display: this.props.collapsed ? 'none' : 'inline-block' }}
          >AntD管理平台</b>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          {
            MenuData.map((item, i) => {
              if (item.children && item.children.length) {
                return (
                  <SubMenu key={i} icon={<item.icon />} title={item.name}>
                    {
                      item.children.map((sub, index) => {
                        return (
                          <Menu.Item key={`${i}${index}`}>
                            <Link to={`/${item.url}/${sub.url}`}>{sub.name}</Link>
                          </Menu.Item>
                        )
                      })
                    }

                  </SubMenu>
                )
              }
              else {
                return (
                  <Menu.Item key={i} icon={<item.icon />}>
                    <Link to={`/${item.url}`}>{item.name}</Link>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
      </Sider>
    )
  }
}

export default Aside