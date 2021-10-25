import React, { Dispatch, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';
import configureStore from './store';

import './index.css';

const Root: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <BrowserRouter>
      <App />
      <div id='modal' />
    </BrowserRouter>
  );
};

const store = configureStore(undefined);

render(
  <Provider store={ store }>
    <Root />
  </Provider>,
  document.getElementById('root')
);
