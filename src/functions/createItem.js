import setUse from "./setUse";
import Today from "./today";

export default function createItem(ev, items, setItems, id, setId) {
    const title = document.getElementById("titleForm").value;
    const date = document.getElementById("dateForm").value || Today();

    setId(id + 1);

    const newItem = {
        id,
        title,
        date,
        readOnly: true,
        typeDate: "text",
        btEditar: "Editar",
        checked: false,
        deleted: true,
    };
    const newItems = [...items, newItem];

    setUse(newItems, setItems);
}
