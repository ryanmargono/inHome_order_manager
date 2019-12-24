import { GET_ALL_ORDERS, DELETE_ORDER, ADD_ORDER, EDIT_ORDER } from './OrderAction'

function orderReducer (state = {}, action) {
    let newState
    switch(action.type){
        case GET_ALL_ORDERS:
            newState = action.data.reduce((state, data) => {
                state[data.id] = data
                return state
            }, {})
            return newState
        case DELETE_ORDER:
            newState = {...state}
            delete newState[action.data]
            return newState
        case ADD_ORDER:
            newState = { ...state, [action.data.id]: action.data }
            return newState
        case EDIT_ORDER:
            newState = { ...state }
            newState[action.data.id] = action.data
            return newState
        default:
            return state
    }
}

export default orderReducer