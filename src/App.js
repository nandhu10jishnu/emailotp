import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import Emailform from './components/EmailForm';
import Otpform from './components/OTPForm';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Emailform />} />
          <Route path="/verify" element={<Otpform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
