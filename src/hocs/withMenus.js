import React from 'react'
import { Layout, Alert } from 'antd'
import Nav from '../components/Nav'

const withMenus = Component => {
    class WithMenus extends React.Component {
        render() {
            const { show, type, message } = this.props.alert
            const { Header, Sider, Content } = Layout
            return (
                <Layout style={{height: '100vh'}}>
                    <Header style={{ color: 'white' }}> Walmart inHome Order Manager </Header>
                    {
                        show && (
                            <Alert style={{margin: '30px 30px 0 30px'}} type={type} message = {message} closable onClose={this.props.hideAlert} />
                        )
                    }
                    <Layout style={{padding: '30px 30px 30px 30px'}}>
                        <Sider> <Nav /> </Sider>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, marginLeft: '30px'}} > <Component {...this.props} /> </Content>
                    </Layout>
                </Layout>
            )
        }
    }
    return WithMenus
}

export default withMenus
