import {render} from 'react-dom';
import React from 'react';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {todoApp} from './reducers';
import './css/Reset.css';

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
