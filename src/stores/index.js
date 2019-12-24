import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import order from './order/OrderReducer'
import user from './user/UserReducer'
import item from './item/ItemReducer'
import alert from './alert/AlertReducer'

const rootReducer = combineReducers({
    orders: order,
    users: user,
    items: item,
    alert
})

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
      )
    )
  )

export default store