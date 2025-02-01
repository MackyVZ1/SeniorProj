const mysql      = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'localdatabase',
  port : 3306,
  connectionLimit:100
});

try{
    connection.getConnection((err) => {
        if(err){
            console.log("Database connection failed: "+err);
        }else{
            console.log("Database connected successfully.");
            return connection;
        }
    });
}catch(e){
    console.log("Database connection failed: "+e);
}

module.exports = connection;