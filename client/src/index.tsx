import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './container/App/App';
import { Provider } from 'react-redux'
import { productStore } from "./redux/store";


ReactDOM.render(
  <Provider store={productStore}>
      <App />
    </Provider>,
  document.getElementById('root')
);

