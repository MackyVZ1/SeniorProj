const mysql      = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dentistrydatabase',
  port : 3306,
  connectionLimit:100
});

try{
    connection.getConnection((err) => {
        // ถ้าเชื่อมต่อไม่ได้
        if(err){
            console.log("Database connection failed: "+err);
        }
        // ถ้าเชื่อมต่อได้
        else{
            console.log("Database connected successfully.");
            return connection; // ส่งตัวแปร connection ไปใช้งาน
        }
    });
}catch(e){
    console.log("Database connection failed: "+e);
}

module.exports = connection; // ส่งตัวแปร connection ไปใช้งานต่อในไฟล์อื่นๆ