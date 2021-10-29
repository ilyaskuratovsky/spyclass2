import {createStore, combineReducers} from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers({
    reducer: reducer
}
)

const configureStore = () => createStore(rootReducer)

export default configureStore