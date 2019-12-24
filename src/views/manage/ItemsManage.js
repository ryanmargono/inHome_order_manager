import React from 'react';
import withMenus from '../../hocs/withMenus'
import withRedux from '../../hocs/withRedux'
import DataTable from '../../components/DataTable'
import { PageHeader } from 'antd'

const ItemsManage = ({ items, delItem, updateItem, showAlert }) => {
  const handleDelete = async (id) => {
    await delItem(id)
    showAlert({type: 'success', message: `Item ${id} deleted!`})
  }

  const handleUpdate = async (id, data) => {
    const updatedItem = await updateItem(id, data)
    showAlert({type: 'success', message: `Item ${updatedItem.name} updated!`})
  } 
  return (
    <>
      <PageHeader title={'Items'} subTitle='manage' />
      <DataTable fields={['id', 'name']} data={items} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </>
  )
}

export default withRedux(withMenus(ItemsManage))
