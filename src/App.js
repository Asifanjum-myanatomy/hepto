import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {/* Add your page content/routes here */}
        </main>
      </div>
    </Router>
  );
}

export default App;