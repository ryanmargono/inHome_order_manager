import React from 'react'
import { Modal, Button } from 'antd'
import CreateForm from './CreateForm'

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
        const { title, buttonText, data } = this.props
        return (
            <>
                <a onClick={this.showModal}> { buttonText } </a> 
                <Modal
                    centered
                    title={title}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}> Cancel </Button>,
                    ]}
                >
                <CreateForm data={data} buttonText={'Edit'} handleSubmit={this.handleSubmit} />
                </Modal>
            </>
        )
    }
}

export default EditModal