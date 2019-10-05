import { handleActions } from 'redux-actions'
import actionTypes from '../actionTypes'
import { combineReducers } from 'redux'

const initialState = {
    userInfo: {}
}

const userLogin = handleActions({
    [actionTypes.USER_LOGIN]: (state, action) => {
        return {
            ...state,
            userInfo: action.payload
        }
    }
}, initialState.userInfo)

const rootReducer = combineReducers({
    userLogin
})

export default  rootReducer