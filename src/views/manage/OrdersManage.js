import React from 'react';
import withMenus from '../../hocs/withMenus'
import withRedux from '../../hocs/withRedux'
import DataTable from '../../components/DataTable'
import { PageHeader } from 'antd'

const OrdersManage = ({ orders, delOrder, updateOrder, showAlert }) => {
  const handleDelete = async (id) => {
    await delOrder(id)
    showAlert({type: 'success', message: `Order ${id} deleted!`})
  }

  const handleUpdate = async (id, data) => {
    const updatedOrder = await updateOrder(id, data)
    showAlert({type: 'success', message: `Order ${updatedOrder.id} updated!`})
  } 

  return (
    <>
      <PageHeader title={'Orders'} subTitle='manage' />
      <DataTable fields={['id', 'user_id', 'items']} data={orders} handleDelete={handleDelete} handleUpdate={handleUpdate} isOrder={true}/>
    </>
  )
}

export default withRedux(withMenus(OrdersManage))
