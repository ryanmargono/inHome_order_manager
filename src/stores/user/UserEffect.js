import { getAllUsers, deleteUser, addUser, editUser } from './UserAction'

export const fetchAllUsers = () => dispatch =>
    fetch(`${process.env.REACT_APP_SERVICE_URL}user/`)
        .then(res => res.json())
        .then(data => dispatch(getAllUsers(data)))

export const delUser = userId => dispatch =>
    fetch(`${process.env.REACT_APP_SERVICE_URL}user/${userId}/`, {
        method: 'DELETE'
    }).then(() => dispatch(deleteUser(userId)))

export const createUser = data => dispatch => 
    fetch(`${process.env.REACT_APP_SERVICE_URL}user/`,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw res.json()
            return res.json()
        })
        .then(data => {
            dispatch(addUser(data))
            return data
        })

export const updateUser = (userId, data) => dispatch => 
    fetch(`${process.env.REACT_APP_SERVICE_URL}user/${userId}/`,{
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw res.json()
            return res.json()
        })
        .then(data => {
            dispatch(editUser(data))
            return data
        })