import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd'
import './index.scss'
import http from '../../utils/http'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {
  const onFinish = values => {
    console.log('Success:', values);
    const { username, password, remember } = values
    http({
      url: '/api/user/login',
      method: 'post',
      data: {
        account: username,
        password
      }
    })
      .then(res => {
        console.log(res)
        if (remember) localStorage.setItem('username', username)
        else localStorage.removeItem('username')
        sessionStorage.setItem('username', username)
        message.success('登录成功');
        props.history.push('/')
      })
      .catch(() => {
        message.error('用户名或密码错误');
      })

  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <div className="wrapper vertical-c">
        <h1 className='primary text-c pv-2x'>AntD平台登录</h1>
        <div className="shadow bd-primary content">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true, username: localStorage.username || '' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住用户名</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    </div>
  );
};

export default Login;
