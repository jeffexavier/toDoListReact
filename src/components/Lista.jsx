import React from "react";
import "../style/Lista.css";

export default function ListaTarefas(props) {
      
     return(
        <div className="lista">
        {props.lista.map((e, index) => (
            <form key={index} data-key={index} id={"item" + index} className={"items checked"+(e.checked)}>
                <input id={"title" + (index)} className="input finishInput" type="checkbox" checked={e.checked} onClick={props.finished} readOnly={true}/>
                <input id={"title" + (index)} className="input titleInputLista" type="text" placeholder={e.title} readOnly={e.readOnly}/> 
                <input id={"date" + (index)} className="input dateInput" type={e.typeDate} placeholder={e.date} readOnly={e.readOnly}/>
                <button id={"btEditar" + (index)} className="button btLista btEditar" onClick={props.edit}>{e.btEditar}</button>
                <button id={"btDeletar" + (index)} className="button btLista btDeletar" onClick={props.delete}>Excluir</button>
            </form>
        ))}
        </div>
    );
}