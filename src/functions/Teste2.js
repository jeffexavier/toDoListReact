import connectDb from "./connectionData.js";
import mysql from 'mysql2'

async function connect() {
    const connection = mysql.createConnection(connectDb());




}
