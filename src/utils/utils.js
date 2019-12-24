import React from 'react'
import { Avatar } from 'antd'

export const stateToArray = state => Object.keys(state).map(key => {
    const result = { key: state[key].id, ...state[key] }
    if (state[key].items && state[key].items.length) {
        result.items = state[key].items.map(e=>`${e.name}, `)
        result.items[result.items.length-1] = result.items[result.items.length-1].slice(0, -2)
    } 
    return result
})

export const getFieldNames = fields => fields.map(field => {
    const result = { dataIndex: field, key: field, title: field }
    if (field==='avatar') result.render = (url) => <Avatar size="large" src={url} />
    return result
})