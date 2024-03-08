import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/Header/Header.jsx'; // استيراد مكون Header
import Footer from './Footer/Footer.jsx';
import Home from './Home/Home.jsx';
import CarTypeSelector from './cartype/CarTypeSelector.jsx';
import TopCategories from './Top Categories/TopCategories.jsx';
import Cart from './Cart/Cart.jsx';

function App() {
  return (
      <div>
        <Header/>
        <Home/>
        <CarTypeSelector/>
        <TopCategories/>
        <Footer/>
      </div>
  );
}

export default App;
