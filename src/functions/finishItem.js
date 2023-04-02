import setUse from "./setUse";

export default function finishItem(ev, items, setItems) {
    const newItems = [...items];

    const { parentElement } = ev.target;
    const itemKey = parentElement.dataset.key;
    const index = items.findIndex((element, i) => i === Number(itemKey));
    const itemChecked = newItems[index].checked;

    if (itemChecked === false) {
        newItems[index].checked = true;
        parentElement[0].checked = true;
    } else {
        newItems[index].checked = false;
        parentElement[0].checked = false;
    }

    setUse(newItems, setItems);
}
