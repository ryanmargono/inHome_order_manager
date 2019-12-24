import React from 'react'
import { Divider } from 'antd'
import EditModal from './EditModal'
import EditOrderModal from './EditOrderModal'

const Actions = (handleUpdate, handleDelete, record, title, buttonText, isOrder)  => {
    return (
        <span>
            { !isOrder 
            ? <EditModal handleUpdate={handleUpdate} data={record} buttonText={buttonText} title={title}/> 
            : <EditOrderModal handleUpdate={handleUpdate} data={record} buttonText={buttonText} title={title} /> 
            }
            <Divider type="vertical" />
            <a onClick={()=>handleDelete(record.id)}>Delete</a>
        </span>
    )
}

export default Actions