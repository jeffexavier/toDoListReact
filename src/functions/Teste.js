
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

    connection.query(
        `INSERT INTO tarefas (
            title, 
            due_date, 
            type_date, 
            checked, 
            read_only, 
            bt_editar) 
            VALUES (
                "Teste do jeff",
                "28/05/1985",
                "text",
                true,
                true,
                "Salvar"
            );`,
            function(error, results, fields) {
        if (error) {
            console.error('Erro ao conectar: ' + error.stack);
            return;
        }
        console.log('Dados inseridos!' + results)    
    })

    connection.end()
}


teste()