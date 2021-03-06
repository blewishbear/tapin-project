import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from '../src/store/index';
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF()
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions
}




function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  )
}


ReactDOM.render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
