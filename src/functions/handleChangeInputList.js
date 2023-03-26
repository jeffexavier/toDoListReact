export default function createItem(ev, items, setItems) {
    const parentElement = ev.target.parentElement
    const key = parentElement.dataset.key
    let newLista = [...items]

    if(ev.target.classList[1] === "titleInput") {
        newLista[key].title = ev.target.value
    } else if(ev.target.classList[1] === "dateInput") {
        newLista[key].date = ev.target.value
    }
    
    setItems(newLista)
    console.log(ev.target.classList[1] === "titleInput")
}
