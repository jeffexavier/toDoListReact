export default function executeSetUse(constItems, setUse) {
    localStorage.setItem('items', JSON.stringify(constItems));
    setUse(constItems);
    
    // const mysql = require('mysql');

    // const connection = mysql.createConnection({
    //     host: '%',
    //     user: 'u927881056_testejeff',
    //     password: 'Ytu24561m2.',
    //     database:'u927881056_testejeff',
    // });

    // connection.connect(function(err) {
    //     if (err) {
    //         console.error('Erro ao conectar: ' + err.stack);
    //         return;
    //     }
    //     console.log('Conectado ao banco de dados com sucesso');
    // });
};