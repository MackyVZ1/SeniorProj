// import extension
const mysql = require('mysql2')

// Declaration Variables
const max_retry = 5
const time_retry = 5000 // milisec


const initMySQL = async () =>{
    try{
        const db = await mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'localdatabase',
            port: 3306,
            waitForConnections: true,
            connectionLimit: 20,
        });
        console.log('Connected to MySQL')
        const initQuery = `CREATE TABLE IF NOT EXISTS users(
            email VARCHAR(60) PRIMARY KEY,
            username VARCHAR(60),
            role VARCHAR(20)
        )`
        db.query(initQuery)
        console.log("Create table users completed.")
        return db
    }catch{
        console.error('Cannot connect to MySQL: ', err);
    }
}

module.exports = initMySQL