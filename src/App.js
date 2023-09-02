import React from 'react'
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/HomPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
