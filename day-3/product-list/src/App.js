import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products List</h1>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
