import React, { Component } from 'react'
import http from '../../utils/http'
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

// const { Column, ColumnGroup } = Table;
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            lists: [],
            createVisible: false,
        }
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        http({
            url: '/api/user/list',
        })
            .then(res => {
                // console.log(res);
                this.setState({ lists: res });
            })
    }
    showCreate() {
        this.setState({
            createVisible: true
        })
    }
    handleCancel = e => {
        console.log(e);
        this.setState({
            createVisible: false,
        });
    };

    handleOk = e => {
        // console.log(this.form);
        this.form.submit()
        // this.setState({
        //     createVisible: false,
        // });
    };

    onFinish = values => {
        // console.log('Success:', values);
        const { username, password, remember } = values
        http({
            url: '/api/user/create',
            method: 'post',
            data: {
                account: username,
                password
            }
        })
            .then(() => {
                message.success('创建成功')
                this.loadData()
                this.setState({
                    createVisible: false
                })
            })
            .catch(() => {
                message.error('数据异常或用户已存在');
            })

    };

    onFinishFailed = errorInfo => {
        message.warning('请完善表单信息')
    };
    // 删除
    delModal(id) {
        const that = this
        Modal.confirm({
            title: '提示',
            icon: <ExclamationCircleOutlined />,
            content: '确定要删除该用户吗？',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                http({
                    url: '/api/user/delete/' + id,
                    method: 'delete'
                })
                    .then(() => {
                        message.success('删除成功')
                        that.loadData()
                    })
            },
        });
    }

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => (
                    <Button disabled={record.account === 'admin' || record.account === sessionStorage.username}
                        onClick={() => this.delModal(record.id)}
                        type='danger'
                    >删除</Button>
                )
            },
        ];
        return (
            <div>
                <Button type="primary" onClick={() => this.showCreate()}>创建管理者</Button>
                <Table dataSource={this.state.lists} columns={columns} rowKey="id" />

                <Modal
                    title="创建用户"
                    visible={this.state.createVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <Form
                        ref={(form) => this.form = form}
                        {...layout}
                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default UserList