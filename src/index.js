import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App'
import rootReducer from './reducers'
import './index.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store.getState()',store.getState()))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


