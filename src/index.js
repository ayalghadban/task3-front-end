import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart/Cart';
import ProductDetails from './Detail/Detail';
import { CartProvider } from './Cart/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
