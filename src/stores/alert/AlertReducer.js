import { SHOW_ALERT, HIDE_ALERT } from './AlertAction'

function alertReducer (state={}, action){
    let newState
    switch(action.type){
        case SHOW_ALERT:
            newState = { 
                show: true,
                message: action.data.message,
                type: action.data.type
             }
             return newState
        case HIDE_ALERT:
            return { show: false }
        default:
            return state
    }
}

export default alertReducer