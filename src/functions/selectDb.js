import connectionData from "./connectionData.js";
import mysql from 'mysql2/promise'

export default async function selectDb() {
    const connection = await mysql.createConnection(connectionData())
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM tarefas');
        console.log(rows)
        connection.end()
        return rows
    } catch (err) {
       
        connection.end()
        return err
    }
}

selectDb()