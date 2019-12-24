import React from 'react'
import { connect } from 'react-redux'
import { fetchAllOrders, delOrder, updateOrder, createOrder } from '../stores/order/OrderEffect'
import { fetchAllItems, delItem, updateItem, createItem } from '../stores/item/ItemEffect'
import { fetchAllUsers, delUser, updateUser, createUser } from '../stores/user/UserEffect'
import { showAlert, hideAlert } from '../stores/alert/AlertAction'

const withRedux = Component => {
    class WithRedux extends React.Component {
        componentDidMount() {
            this.props.fetchAllOrders()
            this.props.fetchAllItems()
            this.props.fetchAllUsers()
        }
        render() {
            return <Component {...this.props} />
        }
    }

    const mapState = store => ({
        orders: store.orders,
        users: store.users,
        items: store.items,
        alert: store.alert
    })
    
    const mapDispatch = dispatch => ({
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        delUser: userId => dispatch(delUser(userId)),
        updateUser: (userId, data) => dispatch(updateUser(userId, data)),
        createUser: data => dispatch(createUser(data)),
        
        fetchAllItems: () => dispatch(fetchAllItems()),
        delItem: itemId => dispatch(delItem(itemId)),
        updateItem: (itemId, data) => dispatch(updateItem(itemId, data)),
        createItem: data => dispatch(createItem(data)),

        fetchAllOrders: () => dispatch(fetchAllOrders()),
        delOrder: orderId => dispatch(delOrder(orderId)),
        updateOrder: (orderId, data) => dispatch(updateOrder(orderId, data)),
        createOrder: data => dispatch(createOrder(data)),

        showAlert: data => dispatch(showAlert(data)),
        hideAlert: () => dispatch(hideAlert())

    })

    return connect(mapState, mapDispatch)(WithRedux)
}

export default withRedux