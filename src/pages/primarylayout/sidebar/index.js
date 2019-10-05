import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { 
    Layout, 
    Menu, 
    Icon,
    Avatar
} from 'antd'
import './index.less'

const { Sider } = Layout
const { SubMenu } = Menu

const history = createBrowserHistory()

class SideBar extends Component {
    constructor (props) {
        super(props)

        this.state = {
            collapsed: false,
            subMenus: [
                {
                    type: 'subMenu', 
                    path: '/usermanage',
                    icon: 'user',
                    name: '用户管理',
                    menuitems: [
                        {path: '/admin', name: '管理员'},
                        {path: '/user', name: '普通用户'},
                    ]
                },
                {
                    type: 'subMenu', 
                    path: '/waremanage',
                    icon: 'appstore',
                    name: '商品管理',
                    menuitems: [
                        {path: '/type', name: '商品类别'},
                        {path: '/info', name: '商品信息'},
                    ]
                },
                {
                    type: 'subMenu', 
                    path: '/authenticationmanage',
                    icon: 'check-circle',
                    name: '认证管理',
                    menuitems: [
                        {path: '/student', name: '学生认证'},
                        {path: '/seller', name: '商家认证'},
                    ]
                },
            ],
            menus: [
                {type: 'menu', path: '/sharemanage', icon: 'share-alt', name: '分享管理'},
                // {type: 'menu', path: '/receivecustomermanage', icon: 'usergroup-add', name: '获客管理'},
                {type: 'menu', path: '/authoritymanage', icon: 'control', name: '权限管理'},
            ],
            openKeys: ["/usermanage"],  //当前选中的SubMenu
            defaultOpenKeys: ["/usermanage"], //初始化菜单组件的SubMenu
            defaultSelectedKeys: ["/usermanage/admin"] //初始化默认选中的MenuItem
        }
    }

    componentWillMount() {
        const arr = history.location.pathname.split('/')
        const defaultOpenKeys = arr[1] ? [`/${arr[1]}`] : this.state.defaultOpenKeys
        const defaultSelectedKeys = arr[2] ? [`${history.location.pathname}`] : this.state.defaultSelectedKeys
        // console.log(defaultSelectedKeys)
        
        this.setState((state, props) => ({
            defaultOpenKeys: defaultOpenKeys,
            openKeys: defaultOpenKeys,
            defaultSelectedKeys: defaultSelectedKeys
        }))
        
        this.props.history.push(defaultSelectedKeys[0]) 
    }

    onCollapse = collapsed => {
        this.setState({ collapsed })
    }

    handleClick = e => {
        const currentOpenKey = `/${e.key.split('/')[1]}`
        if (this.state.openKeys[0] !== currentOpenKey) {
            this.setState({
                openKeys: [currentOpenKey]
            })
        }
    }

    // SubMenu 展开/关闭的回调
    onOpenChange = (openKey) => {
        this.setState({
            openKeys: openKey
        })
    }

    // 路由重定向
    onRedirect = () => {
        this.props.history.replace('/usermanage/admin')
    }

    render () {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" onClick={this.onRedirect}>
                    <Avatar src="https://img-blog.csdnimg.cn/20190919235232228.png" size="large"/>
                    <span>
                        &nbsp;&nbsp;后端管理系统
                    </span>
                </div>
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    onClick={this.handleClick}
                    defaultOpenKeys={this.state.defaultOpenKeys}
                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    {/* 带子菜单的菜单项 */}
                    {
                        this.state.subMenus.map((subMenu, index) => (
                            <SubMenu
                            key={subMenu.path}
                            title={
                                <span>
                                <Icon type={subMenu.icon}/>
                                <span>{subMenu.name}</span>
                                </span>
                            }
                            >
                                {
                                    subMenu.menuitems.map((menuitem, index) => (
                                        <Menu.Item key={`${subMenu.path}${menuitem.path}`}>
                                            {menuitem.name}
                                            <Link to={`${subMenu.path}${menuitem.path}`}>{menuitem.name}</Link>
                                        </Menu.Item>
                                    ))
                                }
                            </SubMenu>
                        ))
                    }
                    {/* 菜单项 */}
                    {
                        this.state.menus.map((menu, index) => (
                            <Menu.Item key={menu.path}>
                                <Icon type={menu.icon} />
                                <span>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </span>
                            </Menu.Item>
                        ))
                    }
                </Menu>
           </Sider>
        )
    }
}

export default withRouter(SideBar)