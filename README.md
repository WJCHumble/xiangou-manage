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


    
    