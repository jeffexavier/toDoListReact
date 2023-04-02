import React, { useEffect, useState } from "react";
import "../style/Lista.css";

import today from "../functions/today.js";
import editItem from "../functions/editItem.js"
import deleteItems from "../functions/deleteItem.js";
import finishItem from "../functions/finishItem.js";
import handleChangeInputList from "../functions/handleChangeInputList.js"

export default function ListaTarefas(props) {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    function editar(ev) { editItem(ev, items, setItems) };
    function deletar(ev) { deleteItems(ev, items, setItems) };    
    function finished(ev) { finishItem(ev, items, setItems) };
    function handleChange(ev) { handleChangeInputList(ev, items, setItems) };
   
    useEffect(() => {
        document.getElementById('titleForm').value = '';
        document.getElementById('dateForm').value = today();
      }, [items])

     return(
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
    );
}