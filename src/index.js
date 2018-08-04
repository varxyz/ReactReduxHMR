import React from 'react';
import { install } from 'offline-plugin/runtime';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
install();
ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </AppContainer>,
  document.querySelector('.container'),
);
