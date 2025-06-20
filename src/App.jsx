import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function useGeoDBSearch(query) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      if (query.length < 3) return;
      try {
        const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}&limit=5`, {
          headers: {
            'X-RapidAPI-Key': 'YOUR_GEODB_API_KEY',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
          }
        });
        const data = await response.json();
        setResults(data.data || []);
      } catch (error) {
        console.error('GeoDB error:', error);
        setResults([]);
      }
    };
    fetchCities();
  }, [query]);
  return results;
}

function LocationAutoComplete({ value, onChange, onSelect, placeholder }) {
  const suggestions = useGeoDBSearch(value);
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="bg-white border mt-1 rounded shadow">
          {suggestions.map(city => (
            <li
              key={city.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelect(`${city.city}, ${city.country}`)}
            >
              {city.city}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to TravelGenius.io</h1>
      <p>Smart travel deals, personalized experiences, and intelligent planning tools — all in one place.</p>
    </div>
  );
}

function Hotels() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Hotels</h2>
      <p>Compare Agoda, Booking.com, Expedia deals (mocked)</p>
    </div>
  );
}

function Flights() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  return (
    <div style={{ padding: 40 }}>
      <h2>Search Flights</h2>
      <LocationAutoComplete value={from} onChange={setFrom} onSelect={setFrom} placeholder="From" />
      <LocationAutoComplete value={to} onChange={setTo} onSelect={setTo} placeholder="To" />
    </div>
  );
}

function Activities() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Activities</h2>
      <p>Viator-style results based on location (mocked)</p>
    </div>
  );
}

function SmartMatch() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Smart Travel Match</h2>
      <p>AI-based matching based on age, group size, goal (coming soon)</p>
    </div>
  );
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
