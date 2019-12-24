import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores/index'
import 'antd/dist/antd.css'
import './styles/app.css'

import OrdersManage from './views/manage/OrdersManage';
import UsersManage from './views/manage/UsersManage';
import ItemsManage from './views/manage/ItemsManage';

import OrderCreate from './views/create/OrderCreate';
import UserCreate from './views/create/UserCreate';
import ItemCreate from './views/create/ItemCreate';


ReactDOM.render(
    <BrowserRouter>
        <Provider store ={store}>
            <Switch>
                <Route exact path='/users' component={UsersManage} />
                <Route exact path='/items' component={ItemsManage} />
                <Route exact path='/users/create' component={UserCreate} />
                <Route exact path='/items/create' component={ItemCreate} />
                <Route exact path='/orders/create' component={OrderCreate} />
                <Route path='/' component={OrdersManage} />
            </Switch>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
