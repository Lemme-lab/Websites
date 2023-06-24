import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inputs from './Inputs';
import { getkey } from './GetMealID';
import { useEffect, useState } from "react";
import MealList from './MealList';
import MealDetails from './MealDetails';

function App() {
  const [name, setname] = useState("");
  const [book, setbook] = useState("");

  useEffect(() => { getkey(name, setbook) }, [name]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Inputs setname={setname} />
          <Routes>
            <Route path="/" element={<MealList books={book} />} />
            <Route path="/meal/:id" element={<MealDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

