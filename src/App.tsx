import React from 'react';
import './App.css';
import Navigation from './components/Naviagtion';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Footer from './components/Footer';
import NotFound from './pages/not found/NotFound';
import Products from './pages/products/Products';
import Details from './pages/details/Details';

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/details/:id' element={<Details/>} />
        <Route path='/details/:id' element={<Details  />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
