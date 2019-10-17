import React, { Component } from 'react'
import MyForm from '../UserForm'
import {
    Drawer
} from 'antd'
import './index.less'

export default class MyDrawer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            visible: false
        }        
    }


    showDrawer = () => {
        this.setState({
            visible: true
        })
    }

    onClose = () => {
        this.setState({
            visible: false
        })
    }        

    render () {

        return (
            <div>
                <Drawer
                    title={this.props.title}
                    width="400"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {this.props.children}
                </Drawer>
            </div>
        )
    }
}
