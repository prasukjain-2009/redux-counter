import React, { Component } from 'react';
import App from './jsx/App';
import { render } from 'react-dom';
import Hello from './jsx/Hello';
import './style.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './js/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>
  , document.getElementById('root'));
