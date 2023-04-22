import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';

import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Consulting from './components/pages/Consulting';
import ContactUs from './components/pages/ContactUs';
import Marketing from './components/pages/Marketing';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/consulting" element={<Consulting />} />


      </Routes>
    </Router>
  );
}

export default App;
