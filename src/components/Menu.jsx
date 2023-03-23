import React from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
    
    return(
        <nav>
        <ul>
          <li><Link to="/">Teste1</Link></li>
          <li><Link to="/about">Teste2</Link></li>
        </ul>
      </nav>
    )
}