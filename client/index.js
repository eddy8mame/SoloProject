import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import {createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// window.React = React;

import App from './app.js';
import store from './app/store.js';

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
);