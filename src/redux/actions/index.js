import { createActions } from 'redux-actions'
import actionTypes from '../actionTypes'

export default createActions({
    [actionTypes.USER_LOGIN]: ({username, password}) => {
        const userInfo = {
            username,
            password
        }
        // console.log(userInfo)
        return userInfo
    }
})