import setUse from "./setUse.js";

export default function createItem(ev, items, setItems) {
    let newItems = [...items];
      
    const parentElement = ev.target.parentElement;
    const itemKey = parentElement.dataset.key;    
    const index = items.findIndex((element, index) => index === Number(itemKey));
    const itemTitle = newItems[index].title;
    const itemDate = newItems[index].date;

    let itemReadOnly = newItems[index].readOnly;

    if(itemReadOnly === true) {      
        newItems[index].readOnly = false;
        newItems[index].typeDate = "date";      
    } else {
        newItems[index].readOnly = true;
        newItems[index].typeDate = "text";

        const newTitle = parentElement[1].value;
        const newDate = parentElement[2].value;

        newItems[index].title = newTitle || itemTitle;
        newItems[index].date = newDate || itemDate ;
    }

    setUse(newItems, setItems);
};