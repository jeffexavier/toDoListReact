import React from "react";
import { Link } from "react-router-dom";
import "../style/Menu.css";

export default function Menu() {
    return (
        <nav className="nav">
            <Link className="itemLink" to="/">
                Lista de Tarefas
            </Link>
            <Link className="itemLink" to="/teste">
                Teste
            </Link>
        </nav>
    );
}
