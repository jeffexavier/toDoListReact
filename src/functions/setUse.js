export default function executeSetUse(constItems, setUse) {
    localStorage.setItem('items', JSON.stringify(constItems));
    setUse(constItems);
    
    // const mysql = require('mysql');

    // const connection = mysql.createConnection({
    //     host: ''
    // })
// teste de commit 2

}