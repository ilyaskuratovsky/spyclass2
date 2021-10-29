import { combineReducers } from 'redux'
import {CHANGE_SCREEN} from '../actions/types'

const initialState = {
    screen: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SCREEN: 
            return {...state, screen: action.scren}
        default:
            return state
    }
}


export default combineReducers({
    reducer: reducer
}
)