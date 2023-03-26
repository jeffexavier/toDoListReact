import setUse from "./setUse.js";

export default async function deleteItems(ev, items, setItems) {
    ev.preventDefault();
    const itemKey = ev.target.parentElement.dataset.key;
    const index = items.findIndex((element, index) => index === Number(itemKey));
    
    items.splice(index, 1);
    const newItems = [...items];

    await setUse(newItems, setItems);
    window.location.reload();
};