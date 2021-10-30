import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reduxTestSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})