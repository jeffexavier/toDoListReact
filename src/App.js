import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Menu from './components/Menu.jsx'
import Form from './components/Form.jsx';
import ListaTarefas from "./components/Lista.jsx";

import FormatStringDate from './functions/FormatStringDate.js'
import FormatedStringDate from './functions/FormatedStringDate.js'

import './style/Body.css';

export default function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [id, setId] = useState(items.length);

  function executeSetItems(constItems) {
    setItems(constItems);     

    localStorage.setItem('items', JSON.stringify(constItems));
  }

  function click(e) {
    e.preventDefault();
    
    const title = document.getElementById('titleForm').value;
    const date = FormatStringDate(document.getElementById('dateForm').value);
    
    setId(id+1);

    const newItem = {id: id, title, date: date, readOnly: true, typeDate: "text", btEditar: "Editar", checked: false};
    const newItems = [...items, newItem];
    // teste
    // setItems(updatedItems);     
    // localStorage.setItem('items', JSON.stringify(updatedItems));

    executeSetItems(newItems);

  }

  function deletar(e) {
    e.preventDefault();
    const itemKey = e.target.parentElement.dataset.key;

    console.log(e)
    
    const index = items.findIndex((element, index) => index === Number(itemKey));

    console.log(index);

    items.splice(index, 1);

    const newItems = [...items];

    // setItems(newItems);
    // localStorage.setItem('items', JSON.stringify(newItems));

    executeSetItems(newItems);
  }

  function editar(e) {
  // e.preventDefault();

    let newItems = [...items];

    const parentElement = e.target.parentElement;
    const itemKey = parentElement.dataset.key;    
    const index = items.findIndex((element, index) => index === Number(itemKey));
    const itemTitle = newItems[index].title;
    const itemDate = newItems[index].date;

    let itemReadOnly = newItems[index].readOnly;

    if(itemReadOnly === true) {      
      newItems[index].readOnly = false;
      newItems[index].typeDate = "date";      
      newItems[index].btEditar = "Salvar";

    } else {
      newItems[index].readOnly = true;
      newItems[index].typeDate = "text";
      newItems[index].btEditar = "Editar"; 

      const newTitle = parentElement[1].value;
      const formatedDate = FormatedStringDate(parentElement[2].value);
      parentElement[2].value = formatedDate
      const newDate = formatedDate

      newItems[index].title = newTitle || itemTitle;
      newItems[index].date = newDate || itemDate ;

    }
    // setItems(newItems);
    // localStorage.setItem('items', JSON.stringify(newItems));

    executeSetItems(newItems);
  }


  function finished(e) {
    // e.preventDefault()

    let newItems = [...items];    

    const parentElement = e.target.parentElement;
    const itemKey = parentElement.dataset.key;    
    const index = items.findIndex((element, index) => index === Number(itemKey));
    let itemChecked = newItems[index].checked;


    if(itemChecked === false) {
    newItems[index].checked = true;
    parentElement[0].checked = true;
    // console.log(parentElement[3])
    
    
    } else {
      newItems[index].checked = false;
      parentElement[0].checked = false;
    }

    // console.log(parentElement[0].checked)

    // setItems(newItems);
    // localStorage.setItem('items', JSON.stringify(newItems));

    executeSetItems(newItems);

  }


  useEffect(() => {
    console.log('teste')
  }, [items])


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
              <Form click={click} />
              <ListaTarefas lista={items} delete={deletar} edit={editar} finished={finished}/>
              </div>
        }/>
      </Routes>
    </Router>

  );
}