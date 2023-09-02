import React from 'react'
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './page/HomPage';
import ProjectPage from './page/ProjectPage';
import MySelf from './page/MySelf';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectPage/>}/>
      <Route path="/about" element={<MySelf/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
