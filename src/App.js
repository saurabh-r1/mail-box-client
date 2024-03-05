// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Compose from './components/Compose';
import Inbox from './components/Inbox';
import SentMail from './components/SentMail';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-9 mt-4">
            <Routes>
              <Route path="/" element={<Compose />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/sent" element={<SentMail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
