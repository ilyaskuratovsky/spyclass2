import {CHANGE_SCREEN} from './types'

export const changeScreen = (screen) => (
    {
        type: CHANGE_SCREEN,
        payload: screen
    }
)