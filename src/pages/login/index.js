import React, { Component } from 'react'
import LoginForm  from '../../components/LoginForm'
import './index.less'

export default class Login extends Component {
    render () {
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
                        <LoginForm/> 
                    </div>
                </div>
            </div>
       )
    }
}