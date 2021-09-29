import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import ProductsPage from './pages/ProductsPage';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <ProductsPage /> 
  </React.StrictMode>,
  document.getElementById('root')
);
