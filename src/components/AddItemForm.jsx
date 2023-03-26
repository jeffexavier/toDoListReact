import React, { useEffect, useState } from "react";
import createItem from "../functions/createItem.js"
import today from "../functions/today.js";
import '../style/AddItemForm.css';

export default function AddItemForm(props) {
    
    const [dateForm, setDateForm] = useState(today())
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const [id, setId] = useState(items.length);

    function createdItem(ev) { createItem(ev, items, setItems, id, setId) };
    function handleFormDateChange(ev) { setDateForm(ev.target.value); console.log('date') };

useEffect(() => {
    console.log("teste")
}, [])

    return(
        <div id="formTarefa">
            <form className="form" onSubmit={createdItem}>
                <input id="titleForm" className="inputForm titleInput" name="title" placeholder="Título da tarefa..." />
                <input id="dateForm" className="inputForm dateInput" type="date" value={dateForm} onChange={handleFormDateChange} />
                <button id="buttonForm" className="button buttonForm" type="submit">Adicionar tarefa</button>
            </form>
        </div>
    )
}