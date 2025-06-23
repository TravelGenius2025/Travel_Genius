import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SmartMatchForm() {
  const [age, setAge] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [tripType, setTripType] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let suggestion = "We recommend: ";
    if (tripType === "romantic") {
      suggestion += "Santorini or Paris";
    } else if (tripType === "adventure") {
      suggestion += "New Zealand or Peru";
    } else if (tripType === "family") {
      suggestion += "Singapore or Dubai";
    } else {
      suggestion += "Barcelona or Istanbul";
    }
    suggestion += " — look for stays around late September for deals.";
    setResult(suggestion);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>SmartMatch AI Assistant</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 400 }}>
        <input type="number" placeholder="Average Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="number" placeholder="Number of People" value={groupSize} onChange={(e) => setGroupSize(e.target.value)} required />
        <select value={tripType} onChange={(e) => setTripType(e.target.value)} required>
          <option value="">Select Trip Type</option>
          <option value="romantic">Romantic</option>
          <option value="family">Family</option>
          <option value="adventure">Adventure</option>
          <option value="cultural">Cultural</option>
        </select>
        <button type="submit">Get Suggestions</button>
      </form>
      {result && <div style={{ marginTop: 20, fontWeight: 'bold' }}>{result}</div>}
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to TravelGenius.io</h1>
      <p>Your smart travel assistant is just a click away.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: '#eee' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/smartmatch">SmartMatch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartmatch" element={<SmartMatchForm />} />
      </Routes>
    </Router>
  );
}

export default App;
