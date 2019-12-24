import { GET_ALL_USERS, DELETE_USER, ADD_USER, EDIT_USER } from './UserAction'

function orderReducer (state = {}, action) {
    let newState
    switch(action.type){
        case GET_ALL_USERS:
            newState = action.data.reduce((state, data) => {
                state[data.id] = data
                return state
            }, {})
            return newState
        case DELETE_USER:
            newState = {...state}
            delete newState[action.data]
            return newState
        case ADD_USER:
            newState = { ...state, [action.data.id]: action.data }
            return newState
        case EDIT_USER:
            newState = { ...state }
            newState[action.data.id] = action.data
            return newState
        default:
            return state
    }
}

export default orderReducer