const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: '185.239.210.103',
    user: 'u927881056_testejeff',
    password: 'Ytu24561m2.',
    database:'u927881056_testejeff'
})

connection.connect();

app.get('/items', (req, res) => {
    connection.query('SELECT * FROM tarefas', (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});

app.listen(5000, () => {
    console.log('Server Listening on port 5000')
})