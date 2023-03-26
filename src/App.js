import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu.jsx'
import ListaTarefas from "./components/Lista.jsx";

import './style/Body.css';


export default function App() {
  
  return (

    <Router>

      <Menu />
      <Routes>
        <Route exact path="/teste "element={
          <h1>Teste do Jeffinho</h1>
        } />
        <Route />
        <Route exact path="/" element={
              <div className="body">
              <ListaTarefas />
              </div>
        }/>
      </Routes>
    </Router>

  );
}