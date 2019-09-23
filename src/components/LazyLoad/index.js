import React, { Component } from 'react'
import { 
    Spin
} from 'antd'

export default class LazyLoad extends Component {
    constructor (props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    toggleSpinning = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    render () {
        return (
            <Spin tip="正在同步数据..." spinning={this.state.loading}>
                { this.props.children }
            </Spin>
        )
    }
}

