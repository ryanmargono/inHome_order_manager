export const GET_ALL_ITEMS = 'GET_ALL_ITEMS'
export const GET_ITEM = 'GET_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'

export const getAllItems = data => ({ type: GET_ALL_ITEMS, data })
export const deleteItem = userId => ({ type: DELETE_ITEM, data: userId })
export const addItem = data => ({ type: ADD_ITEM, data })
export const editItem = data => ({type: EDIT_ITEM, data })