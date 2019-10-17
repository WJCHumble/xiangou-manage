import React, { Component, createRef } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import store from '../../redux'
import cookie from 'react-cookies'
import SideBar from './sidebar'
import RightContent from './rightcontent'
import MyDrawer from '../../components/MyDrawer'
import UserForm from '../../components/UserForm'
import { exitConfirm } from '../../utils/common'
import { 
  Layout, 
  Avatar
} from 'antd'
import './index.less'

const { Header, Footer} = Layout

class PrimaryLayout extends Component {

    constructor () {
      super()

      this.state = {
        visible: false,
        userInfo: {
        }
      }
      this.oMyDrawer = createRef()
    }

    componentDidUpdate() {
      let userInfo = {}
      let { userLogin } = store.getState()
      if (userLogin.userInfo) {
        userInfo = userLogin.userInfo        
      }else if(cookie.load('userInfo')){
        userInfo = cookie.load('userInfo')
      }

      if (!this.state.userInfo.username) {
        // this.setState({
        //   userInfo
        // })
      }
    }

    showDrawer = () => {
      this.oMyDrawer.current.showDrawer()
    }

    render() {
      const userInfo = cookie.load('userInfo')
      if (!userInfo) {
        return (
          <Redirect to="/login"/>
        )
      }
      
      return (
        <div>
          <Layout style={{ minHeight: '100vh' }}>
            {/* 侧边栏 */}
            <SideBar/> 
            <Layout>
              {/* 头部 */}
              <Header style={{ background: '#fff', padding: 0 }}>
                <div className="avatar-area">
                    <Avatar src='https://img-blog.csdnimg.cn/20190913132853727.jpg'/>
                  <span onClick={this.showDrawer} className="user-name">{this.state.userInfo.username ? this.state.userInfo.username : 'WJCHumble'}</span>
                    |
                    <span className="exit" onClick={() => exitConfirm()}>退出</span>
                </div>
              </Header>
              {/* 右侧内容区 */}
              <RightContent/> 
              {/* 底部 */}
              <Footer style={{ textAlign: 'center' }}> ©CopyRight WJCHumble 2019</Footer>
            </Layout>
          </Layout>
          {/* 抽屉 */}
          <MyDrawer ref={ this.oMyDrawer } title="用户信息"> 
            {/* <div className="avatar"> */}
            <Avatar size={64} src="https://img-blog.csdnimg.cn/20190913132853727.jpg" />
            {/* </div> */}
            <UserForm />
          </MyDrawer> 
        </div>
      );
    }
}

export default withRouter(PrimaryLayout)