import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
    Form, 
    Icon, 
    Input, 
    Button, 
    Checkbox
} from 'antd'
import store from '../../redux'
import cookie from 'react-cookies'

class LoginForm_ extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 触发用户登录action  
                this.props.userLogin({username: values.username, password: values.password})
                // 解构获取用户登录信息
                let { userLogin: { userInfo } } = store.getState()
                // console.log(store.getState())
                /**
                 * 存入cookie
                 *  */ 
                // 设置cookie失效时间为30分钟
                const expires = new Date() 
                expires.setTime(expires.getTime + 30*60*1000)
                cookie.save(
                    'userInfo',
                    userInfo,
                    {
                        path: '/',
                        expires
                    }
                )
                // 登录跳转
                this.props.history.replace('/usermanage/admin')
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form

        return (
            <Form onSubmit={this.handleSubmit} className="login-form" labelCol={{ span: 4 }} wrapperCol={{ span: 16, offset: 2 }}>
                <Form.Item label="用户名:">
                    {getFieldDecorator('username', {
                        rules: [{ message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('password', {
                        rules: [{ message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住我</Checkbox>)}
                    <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const LoginForm = Form.create({ name: 'login_form' })(LoginForm_)

export default withRouter(LoginForm) 