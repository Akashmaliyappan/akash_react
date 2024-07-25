import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Customer from './components/Customer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
