import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Header/Footer/Footer';
import About from '../components/pages/Aboutus/About';
import Contact from '../components/pages/Contact/Contact';
import Community from '../components/community/community';

import Plans from '../components/plans/Plans';
import Courses from '../components/Courses/Course';

function Layout() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/community" element={<Community/>} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default Layout;
