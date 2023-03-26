import setUse from "./setUse.js";

export default function finishItem(ev, items, setItems) {
    
    let newItems = [...items];    
    
    const parentElement = ev.target.parentElement;
    const itemKey = parentElement.dataset.key;    
    const index = items.findIndex((element, index) => index === Number(itemKey));
    let itemChecked = newItems[index].checked;

    if(itemChecked === false) {
      newItems[index].checked = true;
      parentElement[0].checked = true;    
    } else {
      newItems[index].checked = false;
      parentElement[0].checked = false;
    }

    setUse(newItems, setItems);
}