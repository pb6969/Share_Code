import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import NewCode from './NewCode';
import CodeDisplay from './CodeDisplay';
import './app.css'; 

export default function App() {

  return (
    <Router>
      <div className="top-bar">
        <Link to="/">Home</Link>
        <Link to="/new">New Code</Link>
      </div>
      
      <Routes>
        <Route
          path="/"
          element={<h2 className="wrapper">Welcome to ShareCode!</h2>}
        />
        <Route path="/new" element={<NewCode />} />
        <Route path="/:id" element={<CodeDisplay />} />
      </Routes>
    </Router>
  );
}
