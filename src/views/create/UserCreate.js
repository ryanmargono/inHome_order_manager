import React from 'react';
import withMenus from '../../hocs/withMenus'
import withRedux from '../../hocs/withRedux'
import CreateForm from '../../components/CreateForm'
import { PageHeader } from 'antd'

const UserCreate = ({ createUser, showAlert }) => {
  const handleSubmit = async (e, data) => {
    e.preventDefault()
    try {
      const newUser = await createUser(data)
      showAlert({type: 'success', message: `User ${newUser.name} created!`})
    } catch (err) {
      const error = await err
      showAlert({type: 'error', message: `Error: ${error.name}` })
    }
  }

  return (
    <>
      <PageHeader title={'User'} subTitle='create' />
      <CreateForm handleSubmit={handleSubmit} />
    </>
  )
}

export default withRedux(withMenus(UserCreate))
