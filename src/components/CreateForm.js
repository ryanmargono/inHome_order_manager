import React from 'react'
import { Form, Input, Button, Alert, PageHeader } from 'antd'

class CreateForm extends React.Component {
    state = {}

    componentDidMount(){
        const { data } = this.props
        if (data) this.setState({ id: data.id, name: data.name })
    }

    handleChange = e => this.setState({[e.target.id] : e.target.value})

    render() {
        const { buttonText, handleSubmit, data } = this.props
        const button = buttonText ? buttonText : 'Create'
        
        const defaultName = data ? data.name : ''
        
        return (
            <>
                <Form layout="vertical" onChange={this.handleChange} onSubmit={(e) => handleSubmit(e, this.state)}>
                    <Form.Item>
                        <div> Name: </div>
                        <Input  defaultValue={defaultName} id={'name'}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            { button }
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default CreateForm