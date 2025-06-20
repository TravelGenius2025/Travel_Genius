import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div style={{ padding: 40 }}><h1>Welcome to TravelGenius.io</h1><p>Smart match, flight search, hotel deals, and AI planning are all built-in.</p></div>;
}

function Flights() {
  return <div style={{ padding: 40 }}><h2>Flights</h2><p>Flight search coming soon</p></div>;
}

function Hotels() {
  return <div style={{ padding: 40 }}><h2>Hotels</h2><p>Hotel deals across platforms</p></div>;
}

function Activities() {
  return <div style={{ padding: 40 }}><h2>Activities</h2><p>Viator-style experiences</p></div>;
}

function SmartMatch() {
  return <div style={{ padding: 40 }}><h2>Smart Travel Match</h2><p>AI-based recommendations</p></div>;
}

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: '#eee' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/flights" style={{ marginRight: 10 }}>Flights</Link>
        <Link to="/hotels" style={{ marginRight: 10 }}>Hotels</Link>
        <Link to="/activities" style={{ marginRight: 10 }}>Activities</Link>
        <Link to="/smartmatch">Smart Match</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/smartmatch" element={<SmartMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
