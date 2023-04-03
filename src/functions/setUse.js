export default function executeSetUse(constItems, setUse) {
    localStorage.setItem("items", JSON.stringify(constItems));
    setUse(constItems);
}
