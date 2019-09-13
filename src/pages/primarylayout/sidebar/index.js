import React, { Component } from 'react'
import { Link, Route} from 'react-router-dom'
// import { history } from 'react-router'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout
const { SubMenu } = Menu

export default class SideBar extends Component {
    constructor () {
        super()
    }

    state = {
        collapsed: false,
    }

    onCollapse = collapsed => {
        this.setState({ collapsed })
    }

    render () {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo">
                    闲购-后端管理系统
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="user"/>
                        <span>用户管理</span>
                        </span>
                    }
                    >
                    <Menu.Item key="1">
                        <Link to="/usermanage/admin">管理员</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/usermanage/user">普通用户</Link>
                    </Menu.Item>
                    <Menu.Item key="3" >
                        <Link to="/usermanage/authenticateduser">认证用户</Link>
                    </Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="appstore" />
                        <span>商品管理</span>
                        </span>
                    }
                    >
                    <Menu.Item key="4">
                        <Link to="/waremanage/type">商品类别</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/waremanage/info">商品信息</Link>
                    </Menu.Item>
                    </SubMenu> 
                    <Menu.Item key="6">
                    <Icon type="share-alt" />
                    <span>分享管理</span>
                    </Menu.Item>
                    <SubMenu
                    key="sub3"
                    title={
                        <span>
                        <Icon type="check-circle" />
                        <span>认证管理</span>
                        </span>
                    }
                    >
                    <Menu.Item key="7">
                        <Link to="/authenticationmanage/student">学生认证</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to="/authenticationmanage/seller">卖方认证</Link>
                    </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="control" />
                        <span>
                            <Link to="/authoritymanage">权限管理</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Icon type="usergroup-add" />
                        <span>获客管理</span>
                    </Menu.Item>
                </Menu>
           </Sider>
        )
    }
}