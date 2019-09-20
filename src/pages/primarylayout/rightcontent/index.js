import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as UserManage from '../../usermanage'
import * as WareManage from '../../waremanage'
import * as AuthenticationManage from '../../authenticationmanage'
import AuthorityManage from '../../authoritymanage'
import ShareManage from '../../sharemanage'
import { Layout } from 'antd'

const { Content } = Layout

export default class RightContent extends Component {
        // constructor (props) {
        //     super(props)
        // }
        componentDidMount() {
        }

       render () {
        return (
            <div>
                {/* 这里渲染路由组件视图 */}
                <Content style={{ margin: '16px 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route exact path="/usermanage/admin" component={ UserManage.Admin }/>
                        <Route exact path="/usermanage/authenticateduser" component={ UserManage.AuthenticatedUser}/>
                        <Route exact path="/usermanage/user" component={ UserManage.User}/>
                        <Route exact path="/authenticationmanage/seller" component={ AuthenticationManage.Seller }/>
                        <Route exact path="/authenticationmanage/student" component={ AuthenticationManage.Student }/>
                        <Route exact path="/waremanage/type" component={ WareManage.Type }/>
                        <Route exact path="/waremanage/info" component={ WareManage.Info }/>
                        <Route exact path="/authoritymanage" component={ AuthorityManage }/>
                        <Route exact path="/sharemanage" component={ ShareManage }/>
                    </div>
                </Content>
            </div>
        )
    }
}