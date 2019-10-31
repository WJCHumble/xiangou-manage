import React, { Component, createRef } from 'react'
import MyDrawer from '../../../components/MyDrawer'
import { showDeleteConfirm } from '../../../utils/common'
import LazyLoad from '../../../components/LazyLoad'
import AdminForm from '../../../components/AdminForm'
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

    constructor (props) {
        super(props)

        this.oMyDrawer = createRef()
        this.oLazyLoad = createRef()

        this.state = {
            admin: {}
        }
    }
    
    //
    handleChange = value => {
        console.log(`selected ${value}`)
    }

    // 显示隐藏抽屉
    toggleDrawer = record => {
        console.log(record)
        this.setState({
            admin: record
        })
        this.oMyDrawer.current.showDrawer()
    }

    // 显示隐藏懒加载
    toggleLazyLoad = () => {
        this.oLazyLoad.current.toggleSpinning()
        setTimeout(() => {
            this.oLazyLoad.current.toggleSpinning()
        }, 2000)
    }

    // 修改标签状态
    toggelTagStatus = (e) => {
        // 之后对接数据在修改此时页面的同时地发请求修改数据库中的数据
        if (e.target.innerHTML === '正常') {
            e.target.innerHTML = '禁用'
            e.target.className = 'ant-tag ant-tag-red'
        } else {
            e.target.innerHTML = '正常'
            e.target.className = 'ant-tag ant-tag-green'
        }
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
                dataIndex: 'account',
                key: 'account',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
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
                key: 'tag',
                dataIndex: 'tag',
                render: tag => {
                            let color = 'green'
                            if (tag === '禁用') {
                                color = 'red'
                            }
                            return (
                            <span>
                                <Tag color={color} onClick={(e) => this.toggelTagStatus(e)}>
                                    {tag}
                                </Tag>
                            </span>
                        );
                    }
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button size="small" type="primary" ghost onClick={() => this.toggleDrawer(record)}>修改</Button>
                        <Divider type="vertical" />
                        <Button size="small" type="danger" ghost onClick={() => showDeleteConfirm()}>删除</Button>
                    </span>
                ),
            },
        ]

        // 定义数据
        const data = [
            {
                key: '1',
                name: 'John Brown',
                account: 32,
                password: '111111',
                role: '分享管理员',
                lastLoginTime: '1111',
                tag: '正常',
            },
            {
                key: '2',
                name: 'Jim Green',
                account: 42,
                password: 'London No. 1 Lake Park',
                role: '分享管理员',
                lastLoginTime: '1111',
                tag: '正常',
            },
            {
                key: '3',
                name: 'Joe Black',
                account: 32,
                password: 'Sidney No. 1 Lake Park',
                role: '超级管理员',
                lastLoginTime: '1111',
                tag: '禁用',
            },
            {
                key: '4',
                name: 'Tom',
                account: 50,
                password: 'Amazing life',
                role: '超级管理员',
                lastLoginTime: '1111',
                tag: '禁用',
            },
        ]

        return (
            <div>
                <LazyLoad ref={this.oLazyLoad}>
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
                                <Button type="primary">筛选</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button>重置</Button>
                            </Col>
                        </Row>
                    </div>
                    <br/><br/>
                    <Table bordered={ true } columns={columns} dataSource={data}/>
                    <Button type="primary">新增管理员</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="primary" onClick={() => this.toggleLazyLoad()}>同步管理员</Button>
                    <MyDrawer ref={this.oMyDrawer} title={this.state.admin.name}>
                        <AdminForm adminInfo={this.state.admin}/>
                    </MyDrawer>
                </LazyLoad>
            </div>
        )
    }
}