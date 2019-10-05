import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { withRouter, Redirect, Route } from 'react-router-dom'
import LoginForm  from '../../components/LoginForm'
import cookie from 'react-cookies'
import './index.less'

class Login extends Component {

    render () {
        const userInfo = cookie.load('userInfo')
        if (userInfo) {
            return (
                <Redirect to="/usermanage/admin" />
            )
        }

        return (
            <div>
                <div className="login_content">
                    <div className="left_back_img">
                        <img src="https://img-blog.csdnimg.cn/20190930215624317.jpeg"></img>
                    </div>
                    <div className="login_control">
                        <div className="sys_title">
                            <img src="https://img-blog.csdnimg.cn/20190919235232228.png"/>
                            闲购-后台管理系统
                        </div>
                        <LoginForm userLogin={ this.props.userLogin } history={this.props.history}/> 
                    </div>
                </div>
            </div>
       )
    }
}

// let Login = connect((state) => {
//     return {
//         userInfo: state.loginForm_.userInfo
//     }
// }, {
//     userLogin: actions.userLogin
// })(LoginForm_)

Login = connect((state) => {
    return {
        userInfo: state.userInfo
    }
}, {
    userLogin: actions.userLogin
})(Login)

export default withRouter(Login)
