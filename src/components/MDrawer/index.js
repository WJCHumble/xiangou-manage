import React, { Component } from 'react'
import {
    Drawer,
    Form, 
    Icon, 
    Input, 
    Button, 
    Checkbox
} from 'antd'



export default class MDrawer extends Component {
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
                    title="用户信息"
                    width="340"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}