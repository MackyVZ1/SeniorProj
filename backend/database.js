const mysql      = require('mysql');
const bcrypt = require('bcrypt')
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root', 
  password : '', 
  database : 'fromdentistry', 
  port : 3306,
  connectionLimit:100
});
// สำหรับทดสอบออนไลน์
//   host     : 'becct8wm9kkmgla1znpc-mysql.services.clever-cloud.com',
//   user     : 'uni7obbbmtobdmpz', 
//   password : 's9zqbpH6eCR3BU4Ww1gD', 
//   database : 'becct8wm9kkmgla1znpc', 
//   port : 3306,
//   connectionLimit:100

try {
  connection.getConnection(async (err) => {
    // ถ้าเชื่อมต่อไม่ได้
    if (err) {
      console.log("Database connection failed: " + err);
    }
    // ถ้าเชื่อมต่อได้
    else {
      console.log("Database connected successfully.");
      // สำหรับเพิ่มข้อมูล admin
      /*
      const fName = 'admin'
      const lName = 'admin'
      const roleID = 1
      const userStatus = 0
      const userId = 'admin'
      const userPass = 'admin101'
      */
      // Hash the password
      /*
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(userPass, saltRounds); // Await the hash function
      */
      // console.log("Hashed password: ", hashedPassword);
      
      /*
      // SQL Statement
      const addQuery = "INSERT INTO tbdentalrecorduser(fName, lName, roleID, status, users, passw) VALUES (?, ?, ?, ?, ?, ?)";

      // เพิ่มข้อมูล
      connection.query(addQuery, [fName, lName, roleID, userStatus, userId, userPass], (err, result) => {
        if (err) {
          console.log("Error query!");
          console.log(err);
        } else {
          console.log("Query success!");
        }
      });
      */
      return connection; // ส่งตัวแปร connection ไปใช้งาน
    }
  });
} catch (e) {
  console.log("Database connection failed: " + e);
}

module.exports = connection; // ส่งตัวแปร connection ไปใช้งานต่อในไฟล์อื่นๆ