import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import Modal from './components/Modal';
import configureStore from './store';

import './index.css';

const Root: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const store = configureStore(undefined);
const concurrentRoot = createRoot(document.getElementById('root'));
concurrentRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
      <Modal />
    </Provider>
  </React.StrictMode>
);
