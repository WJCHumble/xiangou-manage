import React, { Component } from 'react'
import {
    Form,
    Select,
    Input,
    Button,
} from 'antd'
import './index.less'

const { Option } = Select

class MForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
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
                            initialValue: 201652275133 
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
                            initialValue: '18157361620'
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="角色：">
                        {getFieldDecorator('role', {
                            initialValue: 'ordinaryManager'
                        })(
                            <Select defaultValue="ordinaryManager" style={{ width: 206 }} onChange={this.handleSelectChange} disabled={true}>
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
                        <Button htmlType="reset">
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const MyForm = Form.create({ name: 'My_Form' })(MForm)
export default MyForm
