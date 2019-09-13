import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as UserManage from '../../usermanage'
import * as WareManage from '../../waremanage'
import * as AuthenticationManage from '../../authenticationmanage'
import AuthorityManage from '../../authoritymanage'
import ShareManage from '../../sharemanage'
import { Avatar, Layout } from 'antd'

const { Header, Content } = Layout

export default class RightContent extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                {/* 这里渲染路由组件视图 */}
                <Content style={{ margin: '16px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route path="/usermanage/admin" component={ UserManage.Admin }/>
                        <Route path="/usermanage/authenticateduser" component={ UserManage.AuthenticatedUser}/>
                        <Route path="/usermanage/user" component={ UserManage.User}/>
                        <Route path="/authenticationmanage/seller" component={ AuthenticationManage.Seller }/>
                        <Route path="/authenticationmanage/student" component={ AuthenticationManage.Student }/>
                        <Route path="/authoritymanage" component={ AuthorityManage }/>
                        <Route path="/waremanage/type" component={ WareManage.Type }/>
                        <Route path="/waremanage/info" component={ WareManage.Info }/>
                        <Route path="/sharemanage" component={ ShareManage }/>
                    </div>
                </Content>
            </div>
        )
    }
}