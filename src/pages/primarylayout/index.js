import React, { Component, createRef } from 'react'
import SideBar from './sidebar'
import RightContent from './rightcontent'
import MyDrawer from '../../components/MyDrawer'
import MyForm from '../../components/MyForm'
import { 
  Layout, 
  Avatar,
  Drawer,
  Modal
} from 'antd'
import './index.less'

const { Header, Footer} = Layout

// 退出提示登录框
function confirm() {
  Modal.confirm({
    title: '提示',
    content: '确定退出吗？',
    okText: '确认',
    cancelText: '取消',
    onCancel: () => {
      console.log(111)
    },
    onOk: () => {
      console.log(222)
    }
  })
}

export default class PrimaryLayout extends Component {

    constructor () {
      super()

      this.state = {
        visible: false
      }
      this.oMyDrawer = createRef()
    }

    showDrawer = () => {
      this.oMyDrawer.current.showDrawer()
    }

    render() {
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
                    <span onClick={ this.showDrawer } className="user-name">WJCHumble</span>|
                    <span className="exit" onClick={ confirm }>退出</span>
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
            <MyForm /> 
          </MyDrawer> 
        </div>
      );
    }
}