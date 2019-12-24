export const GET_ALL_ORDERS = 'GET_ALL_ORDERS'
export const GET_ORDER = 'GET_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const ADD_ORDER = 'ADD_ORDER'
export const EDIT_ORDER = 'EDIT_ORDER'

export const getAllOrders = data => ({ type: GET_ALL_ORDERS, data })
export const deleteOrder = orderId => ({ type: DELETE_ORDER, data: orderId })
export const addOrder = data => ({ type: ADD_ORDER, data })
export const editOrder = data => ({type: EDIT_ORDER, data })