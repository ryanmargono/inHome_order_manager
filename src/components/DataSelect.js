import React from 'react'
import { Select } from 'antd'

const DataSelect = ({ handleChange, data, defaultValue, mode }) => (
    <Select mode={mode} defaultValue = {defaultValue} onChange={e => handleChange(e)}>
    {
        data.map(record => ( <Select.Option value={record.id}> {record.name} </Select.Option> ))
    }
    </Select>
)

export default DataSelect