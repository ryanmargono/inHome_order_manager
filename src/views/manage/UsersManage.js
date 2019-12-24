import React from 'react';
import withMenus from '../../hocs/withMenus'
import withRedux from '../../hocs/withRedux'
import DataTable from '../../components/DataTable'
import { PageHeader } from 'antd'

const UsersManage = ({ users, delUser, updateUser, showAlert }) => {
  const handleDelete = async (id) => {
    await delUser(id)
    showAlert({type: 'success', message: `User ${id} deleted!`})
  }

  const handleUpdate = async (id, data) => {
    const updatedUser = await updateUser(id, data)
    showAlert({type: 'success', message: `User ${updatedUser.name} updated!`})
  } 

  return (
    <>
      <PageHeader title={'Users'} subTitle='manage' />
      <DataTable fields={['id', 'avatar', 'name']} data={users} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </> 
  )
}

export default withRedux(withMenus(UsersManage))
