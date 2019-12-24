import React from 'react';
import withMenus from '../../hocs/withMenus'
import withRedux from '../../hocs/withRedux'
import CreateOrderForm from '../../components/CreateOrderForm'
import {PageHeader } from 'antd'

const OrderCreate = ({ showAlert, createOrder }) => {
  
  const handleSubmit = async (e, data) => {
    e.preventDefault()
    try {
      const newOrder = await createOrder(data)
      showAlert({type: 'success', message: `Order ${newOrder.id} created!`})
    } catch (err) {
      const error = await err
      showAlert({type: 'error', message: `Error: ${error.name}` })
    }
  } 

  return (
    <>
      <PageHeader title={'Order'} subTitle='create' />
      <CreateOrderForm data={{}} handleSubmit={handleSubmit} />
    </> 
  )
}



export default withRedux(withMenus(OrderCreate))
