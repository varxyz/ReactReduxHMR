import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </AppContainer>,
  document.querySelector('.container'),
);