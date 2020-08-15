import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined,
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header } = Layout;
class Head extends Component {
    logout() {
        sessionStorage.removeItem('username')
        this.props.history.push('/login')
    }
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <div className="ph-2x flex-between" style={{ height: '64px' }}>
                    {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger font-l',
                        onClick: this.props.toggle,
                    })}
                    <div className="flex-start">
                        <Dropdown overlay={() => (
                            <Menu>
                                <Menu.Item>
                                    <div className="flex-start" onClick={() => this.logout()}>
                                        <LogoutOutlined className="font-l mr-1x" />退出登录
                                    </div>
                                </Menu.Item>
                            </Menu>
                        )}>
                            <div className="flex-start">
                                <Avatar icon={<UserOutlined />} className="mr-1x" />
                                <a href='#login' className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {sessionStorage.username} <DownOutlined />
                                </a>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        )
    }
}

export default Head