### 技术栈

    React.js + redux + react-router + axios + less + antd

### 依赖安装

#### antd安装和使用(按需引入)

    yarn add antd
    yarn add react-app-rewired customize-cra
    yarn add babel-plugin-import
    修改package.json
    "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "reactapp-rewired test"
    }
    然后在项目根目录创建一个 config-overrides.js 用于修改默认配置
    const { override, fixBabelImports } = require('customize-cra');

    module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
    );

     import React, { Component } from 'react';
     import { Button } from 'antd';
     import './App.css';

     class App extends Component {
          render() {
            return (
               <div className="App">
                <Button type="primary">Button</Button>
               </div>
           );
         }
      }

      export default App;

#### 复用MyDrawer组件

    通过使用props实现
    即：
        <MyDrawer>
            {this.props.children} 
        </MyDrawer>

#### 按钮onClick绑定事件

    <Button onClick={() => this.eventAction(param)}></Button>

## 问题汇总

### history的push方法路由变化，页面不会变化  暂时用Link标签

    解决：react-router4.0已经不支持通过browserHistory进行push/replace操作
        react-router4.0提供了withRouter高阶组件
        可以在组件中通过 this.props.history.push(path)
                        export default withRouter(组件)
        实现路由组件的跳转



    
    