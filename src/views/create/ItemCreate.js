import React from 'react';
import withMenus from '../../hocs/withMenus'
import withRedux from '../../hocs/withRedux'
import CreateForm from '../../components/CreateForm'
import { PageHeader } from 'antd'

const ItemCreate = ({ createItem, showAlert }) => {
  const handleSubmit = async (e, data) => {
    e.preventDefault()
    try {
      const newItem = await createItem(data)
      showAlert({type: 'success', message: `User ${newItem.name} created!`})
    } catch (err) {
      const error = await err
      showAlert({type: 'error', message: `Error: ${error.name}` })
    }
  }

  return (
    <>
      <PageHeader title={'Items'} subTitle='create' />
      <CreateForm handleSubmit={handleSubmit} />
    </>
  )
}


export default withRedux(withMenus(ItemCreate))
