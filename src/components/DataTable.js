import React from 'react'
import { Table } from 'antd'
import { stateToArray, getFieldNames } from '../utils/utils'
import actions from './Actions'

const DataTable = ({ data, fields, handleUpdate, handleDelete, isOrder }) => {
    const dataSource = stateToArray(data)
    const columns = getFieldNames(fields)
    
    if (columns.length) {
        columns.push({
            title: 'actions',
            key: 'action',
            render: (text, record) => actions(handleUpdate, handleDelete, record, `Edit: ${record.name}`, 'Edit', isOrder),
          })
    }



    return <Table scroll={{ y: 400, x: 400 }} dataSource={dataSource} columns={columns} />
}

export default DataTable