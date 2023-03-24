import React from "react";
import "../style/Form.css"

export default function ClicaBotao(props) {

   return(
    <div id="formTarefa">
        <form  className="form" onSubmit={props.click}>
            <input id="titleForm" className="inputForm titleInput" name="title"  placeholder="Título da tarefa..."/>
            <input id="dateForm" className="inputForm dateInput" type="date" />
            <button id="buttonForm" className="button buttonForm" type="submit">Adicionar tarefa</button>
        </form>
    </div>
   )

}