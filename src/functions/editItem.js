import setUse from "./setUse";

export default function createItem(ev, items, setItems) {
    const newItems = [...items];

    const { parentElement } = ev.target;
    const itemKey = parentElement.dataset.key;
    const index = items.findIndex((element, i) => i === Number(itemKey));
    const itemTitle = newItems[index].title;
    const itemDate = newItems[index].date;

    const itemReadOnly = newItems[index].readOnly;

    if (itemReadOnly === true) {
        newItems[index].readOnly = false;
        newItems[index].typeDate = "date";
    } else {
        newItems[index].readOnly = true;
        newItems[index].typeDate = "text";

        const newTitle = parentElement[1].value;
        const newDate = parentElement[2].value;

        newItems[index].title = newTitle || itemTitle;
        newItems[index].date = newDate || itemDate;
    }

    setUse(newItems, setItems);
}
