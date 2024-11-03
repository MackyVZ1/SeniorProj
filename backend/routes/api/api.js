const express = require('express')
const mysql = require('mysql2')
const router = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'localdatabase',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 20,
});
// Connect to a database
db.connect((err) =>{
    if(err){
        console.error('Cannot connect to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL')
})

router.get('/', (req,res) => {
    console.log("Hello World")
})

module.exports = router