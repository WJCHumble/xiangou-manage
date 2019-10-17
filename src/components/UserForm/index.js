import React, { Component } from 'react'
import { exitConfirm } from '../../utils/common'
import {
    Form,
    Select,
    Input,
    Button,
} from 'antd'
import './index.less'

const { Option } = Select

class UForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleSelectChange = value => {
        // console.log(value);
        // this.props.form.setFieldsValue({
        //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // });
    };

    render () {
        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14, offset: 1 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="管理员编号：">
                        {getFieldDecorator('note', {
                            initialValue: 111
                        })(<Input disabled={true}/>)}
                    </Form.Item>
                    <Form.Item label="账号：">
                        {getFieldDecorator('account', {
                            initialValue: 20112378617 
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="密码：">
                        {getFieldDecorator('password', {
                            initialValue: 666666 
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="姓名：">
                        {getFieldDecorator('username', {
                            initialValue: '吴敬昌'
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="手机号：">
                        {getFieldDecorator('phone', {
                            initialValue: '10086'
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="角色：">
                        {getFieldDecorator('role', {
                            initialValue: 'ordinaryManager'
                        })(
                            <Select  style={{ width: 206 }} onChange={this.handleSelectChange} disabled={true}>
                                <Option value="superManager">超级管理员</Option>
                                <Option value="shareManager">分享管理员</Option>
                                <Option value="ordinaryManager">普通管理员</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <br/>
                    <Form.Item wrapperCol={{ span: 12, offset: 7 }}>
                        <Button type="primary" htmlType="submit">
                            确定
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick={() => exitConfirm()}>
                            退出
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const UserForm = Form.create({ name: 'My_Form' })(UForm)
export default UserForm
