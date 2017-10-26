import {render} from 'react-dom';
import React from 'react';
import App from './components/App';
import Login from './components/Login';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {todoApp} from './reducers';
import './css/Reset.css';
import './css/Layout.css';
import './awesome/font-awesome.css';

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
