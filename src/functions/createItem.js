import setUse from "./setUse.js";
import Today from "./today.js";

export default function createItem(ev, items, setItems, id, setId) {
    
    const title = document.getElementById('titleForm').value;
    const date = document.getElementById('dateForm').value || Today();
    
    setId(id+1);

    const newItem = {id: id, title, date: date, readOnly: true, typeDate: "text", btEditar: "Editar", checked: false, deleted: true};
    const newItems = [...items, newItem];

    setUse(newItems, setItems);
    
};
