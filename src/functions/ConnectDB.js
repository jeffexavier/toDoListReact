function teste() {

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '185.239.210.103',
    user: 'u927881056_testejeff',
    password: 'Ytu24561m2.',
    database:'u927881056_testejeff',
});

// connection.connect(function(err) {
//     if (err) {
//         console.error('Erro ao conectar: ' + err.stack);
//         return;
//     }
//     console.log('Conectado ao banco de dados com sucesso');
// });


connection.query('SELECT * FROM tarefas', function(error, results, fields) {
    if (error) throw error;
    console.log("resultado da consulta", results)
});


connection.query(
    `INSERT INTO tarefas (
        id,
        title,
        due_date,
        type_date,
        checked,
        read_only,
        bt_editar
    ) VALUES (
        3,
        'teste 3 do jeffinho db',
        '28/50/1977',
        'text',
        TRUE,
        FALSE,
        'Salvar'
    );`,
    function(error, results, fields) {
        if (error) throw error; 
        console.log("Resultado da consulta", results)
    }
)
}


teste()