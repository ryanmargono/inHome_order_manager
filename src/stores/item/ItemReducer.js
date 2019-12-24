import { GET_ALL_ITEMS, DELETE_ITEM, ADD_ITEM, EDIT_ITEM } from './ItemAction'

function itemReducer (state = {}, action) {
    let newState
    switch(action.type){
        case GET_ALL_ITEMS:
            newState = action.data.reduce((state, data) => {
                state[data.id] = data
                return state
            }, {})
            return newState
        case DELETE_ITEM:
            newState = {...state}
            delete newState[action.data]
            return newState
        case ADD_ITEM:
            newState = { ...state, [action.data.id]: action.data }
            return newState
        case EDIT_ITEM:
            newState = { ...state }
            newState[action.data.id] = action.data
            return newState
        default:
            return state
    }
}

export default itemReducer