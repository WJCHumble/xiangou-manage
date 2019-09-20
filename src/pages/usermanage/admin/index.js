import React, { Component } from 'react'
import {
    Table, 
    Divider, 
    Tag,
    Input,
    Button,
    Row,
    Col,
    Select
} from 'antd'

const Option = Select

export default class Admin extends Component {
    // constructor () {
    //     super()
    // }
    //定义列

    handleChange = value => {
        console.log(`selected ${value}`)
    }

    render () {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <p>{ text }</p>,
            },
            {
                title: '账号',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '密码',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '上次登录时间',
                dataIndex: 'lastLoginTime',
                key: 'lastLoginTime',
            },
            {
                title: '账号状态',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = 'green'
                            if (tag === '禁用') {
                                color = 'red'
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button size="small" type="link">修改</Button>
                        <Divider type="vertical" />
                        <Button size="small" type="link">删除</Button>
                    </span>
                ),
            },
        ]

        // 定义数据
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: '111111',
                role: '分享管理员',
                lastLoginTime: '1111',
                tags: ['正常'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                role: '分享管理员',
                lastLoginTime: '1111',
                tags: ['正常'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                role: '超级管理员',
                lastLoginTime: '1111',
                tags: ['禁用'],
            },
            {
                key: '3',
                name: 'Tom',
                age: 50,
                address: 'Amazing life',
                role: '超级管理员',
                lastLoginTime: '1111',
                tags: ['禁用'],
            },
        ]


        return (
            <div>
                {/* 条件输入框 */}
                <div className="searchControl">
                    <Row gutter={24}>
                        <Col span={4}>
                            <Input placeholder="请输入姓名"/>       
                        </Col>
                        <Col span={4}>
                            <Input placeholder="请输入账号" />
                        </Col>
                        <Col span={4}>
                            <Select defaultValue="ordinaryManager" style={{ width: 180 }} onChange={ this.handleChange }>
                                <Option value="superManager">超级管理员</Option>
                                <Option value="shareManager">分享管理员</Option>
                                <Option value="ordinaryManager">普通管理员</Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            <Button type="primary">确定</Button>
                        </Col>
                    </Row>
                </div>
                <br/><br/>
                <Table bordered={ true } columns={columns} dataSource={data}/>
                <Button type="primary">新增管理员</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="primary">同步管理员</Button>
            </div>
        )
    }
}