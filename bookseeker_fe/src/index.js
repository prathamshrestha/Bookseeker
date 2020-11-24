import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reducer from './store/reducers/auth'
import {createStore,compose} from 'redux'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// import FixedMenuLayout from './components/notice'


// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';






const composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose

const store =createStore(reducer, composeEnhances(
  applyMiddleware(thunk)
))

const app=(
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);