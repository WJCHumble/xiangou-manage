import React, { Component } from 'react'
import {
    Form, 
    Icon, 
    Input, 
    Button, 
    Checkbox
} from 'antd'

class LoginForm_ extends Component {

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
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
                {/* <Form.Item label="验证码">
                    {getFieldDecorator('username', {
                        rules: [{ message: 'Please input your username!' }],
                    })(
                        <Input
                            className="verify_code"
                            placeholder="请输入验证码"
                        />,
                    )}
                    <span>
                        <Button type="primary" className="verify_code_button">
                            点击刷新验证码
                        </Button>
                    </span>
                </Form.Item> */}
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
export default LoginForm