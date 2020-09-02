import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from 'redux'
import {provider} from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer'

const myStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <provider strore={myStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
