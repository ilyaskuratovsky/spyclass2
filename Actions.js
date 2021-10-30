import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        screen: 'START_OR_JOIN_GAME',
    },
    reducers: {
        goToScreen: (state, screen) => {
            state.screen = screen.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { goToScreen } = mainSlice.actions

export default configureStore({
    reducer: {
        main: mainSlice.reducer,
    },
})

