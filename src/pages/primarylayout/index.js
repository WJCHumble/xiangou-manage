import React, { Component, createRef } from 'react'
import SideBar from './sidebar'
import RightContent from './rightcontent'
import MyDrawer from '../../components/MyDrawer'
import MyForm from '../../components/MyForm'
import { exitConfirm } from '../../utils/common'
import { 
  Layout, 
  Avatar
} from 'antd'
import './index.less'

const { Header, Footer} = Layout



export default class PrimaryLayout extends Component {

    constructor () {
      super()

      this.state = {
        visible: false
      }
      this.oMyDrawer = createRef()
    }

    componentWillMount () {
      
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
            <MyForm /> 
          </MyDrawer> 
        </div>
      );
    }
}