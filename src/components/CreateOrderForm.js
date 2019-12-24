import React from 'react'
import { Form, Button, Alert } from 'antd'
import { stateToArray } from '../utils/utils'
import DataSelect from './DataSelect'
import withRedux from '../hocs/withRedux'

class CreateOrderForm extends React.Component {
    state = {}

    componentDidMount(){
        const { items, user} = this.props.data
        this.setState({items, user: user ? user.id : '' })
    }

    handleUserChange = val => this.setState({user: val})
    
    handleItemChange = ids => this.setState({items: ids})

    handleAddItem = e => {
        e.preventDefault()
        this.setState({numItems: this.state.numItems+1})
    }

    render() {
        const { items, users, handleSubmit, data, buttonText} = this.props
        const { user, id, items: defItems } = data
        const button = buttonText ? buttonText : 'Create' 

        const itemArray = stateToArray(items)
        const userArray = stateToArray(users)
        
        const defaultItems = defItems ? defItems.map(item=>item.id) : []
        const defaultUser = user ? user.id : ''
        
        return (
            <>
                <Form>
                    <Form.Item>
                        <div> User: </div>
                        <DataSelect 
                            defaultValue={ defaultUser } 
                            data={userArray} 
                            handleChange={this.handleUserChange} 
                        />
                    </Form.Item>
                    <Form.Item>  
                        <div> Items: </div>
                        <DataSelect 
                            defaultValue={ defaultItems } 
                            data={itemArray} 
                            handleChange={this.handleItemChange}
                            mode='multiple' 
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={ e =>handleSubmit(e, {id, ...this.state } )} type="primary">
                            { button }
                        </Button>
                    </Form.Item> 
                </Form>
            </>
        )
    }
}

export default withRedux(CreateOrderForm)