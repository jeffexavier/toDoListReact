import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu.jsx'
import ListaTarefas from "./components/ItemList.jsx";
import AddItemForm from "./components/AddItemForm.jsx"
import SecondList from "./components/secondList.jsx";

import './style/Body.css';

export default function App() {
  
  return (

    <Router>

      <Menu />
      <Routes>
        <Route exact path="/teste"element={
          <SecondList /> 
        } />
        <Route />
        <Route exact path="/" element={
              <div className="body">
              <AddItemForm />
              <ListaTarefas />
              </div>
        }/>
      </Routes>
    </Router>

  );
}