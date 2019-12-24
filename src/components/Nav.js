import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Nav = () => {
    const categories = ['Orders', 'Users', 'Items']
    return (
        <Menu style={{height: '100%'}} mode="inline">
            {
            categories.map(name=>(
                <Menu.SubMenu key={name} title={ <span> {name} </span> }>
                    <Menu.ItemGroup key={name}>
                        <Menu.Item key={`${name}1`}> <Link to={`/${name}`} > Manage </Link> </Menu.Item>
                        <Menu.Item key={`${name}2`}> <Link to={`/${name}/create`} > Create </Link> </Menu.Item>
                    </Menu.ItemGroup>
                </Menu.SubMenu>
            ))
            }
        </Menu>
    )
}

export default Nav