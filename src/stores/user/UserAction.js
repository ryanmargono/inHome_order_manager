export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_USER = 'GET_USER'
export const DELETE_USER = 'DELETE_USER'
export const ADD_USER = 'ADD_USER'
export const EDIT_USER = 'EDIT_USER'

export const getAllUsers = data => ({ type: GET_ALL_USERS, data })
export const deleteUser = userId => ({ type: DELETE_USER, data: userId })
export const addUser = data => ({ type: ADD_USER, data })
export const editUser = data => ({type: EDIT_USER, data })