import React, { useEffect, useState } from "react";
import "../style/Lista.css";

import setUse from '../functions/setUse.js'
import Today from "../functions/Today.js";

export default function ListaTarefas(props) {

    const [dateForm, setDateForm] = useState(Today())
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const [id, setId] = useState(items.length);

    function click(e) {
        e.preventDefault();
        
        const title = document.getElementById('titleForm').value;
        const date = document.getElementById('dateForm').value || Today();
        
        setId(id+1);
    
        const newItem = {id: id, title, date: date, readOnly: true, typeDate: "text", btEditar: "Editar", checked: false, deleted: true};
        const newItems = [...items, newItem];
    
        setUse(newItems, setItems);
    
      }


    function handleFormDateChange(ev) {
        setDateForm(ev.target.value)
        console.log('date')
    }

    function editar(e) {

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
        const newDate = parentElement[2].value;
    
        newItems[index].title = newTitle || itemTitle;
        newItems[index].date = newDate || itemDate ;
    
        }

        setUse(newItems, setItems);
    }

    function deletar(e) {
        e.preventDefault();
        const itemKey = e.target.parentElement.dataset.key;

        const index = items.findIndex((element, index) => index === Number(itemKey));

        console.log(index);

        items.splice(index, 1);

        const newItems = [...items];

        setUse(newItems, setItems);
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
        
        
        } else {
          newItems[index].checked = false;
          parentElement[0].checked = false;
        }
    
        setUse(newItems, setItems);
    }


    function handleChange(ev) {

        const parentElement = ev.target.parentElement
        const key = parentElement.dataset.key
        let newLista = [...items]

        if(ev.target.classList[1] === "titleInput") {
            newLista[key].title = ev.target.value
        } else if(ev.target.classList[1] === "dateInput") {
            newLista[key].date = ev.target.value
        }
        
        setItems(newLista)

        console.log(ev.target.classList[1] === "titleInput")
    }
   
    useEffect(() => {
        console.log('teste')
        document.getElementById('titleForm').value = '';
        document.getElementById('dateForm').value = Today();
      }, [items])

     return(
        <>
        <div id="formTarefa">
            <form className="form" onSubmit={click}>
                <input id="titleForm" className="inputForm titleInput" name="title" placeholder="Título da tarefa..." />
                <input id="dateForm" className="inputForm dateInput" type="date" value={dateForm} onChange={handleFormDateChange} />
                <button id="buttonForm" className="button buttonForm" type="submit">Adicionar tarefa</button>
            </form>
        </div>
        <div className="lista">
            {items.map((el, index) => (
            <form key={index} data-key={index} id={"item" + index} className={"items checked" + (el.checked)}>
                <input id={"title" + (index)} className="input finishInput" type="checkbox" checked={el.checked} onClick={finished} readOnly={true} />
                <input id={"title" + (index)} className="input titleInput" type="text" value={el.title} readOnly={el.readOnly} onChange={handleChange} />
                <input id={"date" + (index)} className="input dateInput" type="date" value={el.date} readOnly={el.readOnly} onChange={handleChange} />
                <button id={"btEditar" + (index)} className="button btLista btEditar" onClick={editar}>{el.btEditar}</button>
                <button id={"btDeletar" + (index)} className="button btLista btDeletar" onClick={deletar}>Excluir</button>
            </form>
            ))}
         </div>
    </>
    );
}