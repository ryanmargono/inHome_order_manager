import { getAllOrders, deleteOrder, addOrder, editOrder } from './OrderAction'

export const fetchAllOrders = () => dispatch =>
    fetch(`${process.env.REACT_APP_SERVICE_URL}order/`)
        .then(res => res.json())
        .then(data => dispatch(getAllOrders(data)))

export const delOrder = orderId => dispatch =>
    fetch(`${process.env.REACT_APP_SERVICE_URL}order/${orderId}/`, {
        method: 'DELETE'
    }).then(() => dispatch(deleteOrder(orderId)))

export const createOrder = data => dispatch => 
    fetch(`${process.env.REACT_APP_SERVICE_URL}order/`,{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw res.json()
            return res.json()
        })
        .then(data => {
            dispatch(addOrder(data))
            return data
        })

export const updateOrder = (orderId, data) => dispatch => 
    fetch(`${process.env.REACT_APP_SERVICE_URL}order/${orderId}/`,{
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) throw res.json()
            return res.json()
        })
        .then(data => {
            dispatch(editOrder(data))
            return data
        })