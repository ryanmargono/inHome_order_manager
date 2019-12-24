import React from 'react'
import { Modal, Button } from 'antd'
import withRedux from '../hocs/withRedux'
import CreateOrderForm from './CreateOrderForm'

class EditModal extends React.Component {
    state = {}

    showModal = () => this.setState({ visible: true })
    
    handleCancel = e => this.setState({ visible: false })

    handleSubmit = (e, data) => {
        e.preventDefault()
        this.props.handleUpdate(data.id, data)
        this.handleCancel()
    }

    render(){
        const { buttonText, data, orders } = this.props
        return (
            <>
                <a onClick={this.showModal}> { buttonText } </a> 
                <Modal
                    centered
                    title={ `Edit Order: ${data.id}` }
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}> Cancel </Button>,
                    ]}
                >
                <CreateOrderForm buttonText={'Edit'} data={orders[data.id]} handleSubmit={this.handleSubmit} />
                </Modal>
            </>
        )
    }
}

export default withRedux(EditModal)