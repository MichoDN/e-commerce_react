import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

//  CSS
import 'bootswatch/dist/morph/bootstrap.min.css';

//components
import './css/header.css'
import './css/productCards.css'
import './css/filter.css'
import './css/cart.css'
import './css/inCartProducts.css'

//pages
import './css/store.css'
import './css/App.css'
import './css/index.css'
import './css/productDetail.css'
import './css/login.css'
import './css/home.css'
import './css/purchases.css'

//Media Query
import './css/mediaQuery.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
