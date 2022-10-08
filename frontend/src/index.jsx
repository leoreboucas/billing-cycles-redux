import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import Routes from "./main/routes";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import form from 'redux-form'

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))