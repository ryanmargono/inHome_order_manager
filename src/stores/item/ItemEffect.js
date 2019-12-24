import { getAllItems, deleteItem, addItem, editItem } from './ItemAction'

export const fetchAllItems = () => dispatch =>
    fetch(`${process.env.REACT_APP_SERVICE_URL}item/`)
        .then(res => res.json())
        .then(data => dispatch(getAllItems(data)))

export const delItem = itemId => dispatch =>
    fetch(`${process.env.REACT_APP_SERVICE_URL}item/${itemId}/`, {
        method: 'DELETE'
    }).then(() => dispatch(deleteItem(itemId)))

export const createItem = data => dispatch => 
    fetch(`${process.env.REACT_APP_SERVICE_URL}item/`,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw res.json()
            return res.json()
        })
        .then(data => {
            dispatch(addItem(data))
            return data
        })

export const updateItem = (itemId, data) => dispatch => 
    fetch(`${process.env.REACT_APP_SERVICE_URL}item/${itemId}/`,{
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw res.json()
            return res.json()
        })
        .then(data => {
            dispatch(editItem(data))
            return data
    })