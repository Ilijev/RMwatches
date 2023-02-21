import React from 'react';
import './App.css';
import Navigation from './components/Naviagtion';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home';
import Footer from './components/Footer';
import NotFound from './pages/not found/NotFound';

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
