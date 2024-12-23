// import extension
const mysql = require("mysql2");

// Declaration Variables
const max_retry = 5;
const time_retry = 5000; // milisec

const initMySQL = async () => {
  try {
    const db = await mysql.createPool({
      host: "localhost",
      user: "root",
      database: "localdatabase",
      port: 3306,
      waitForConnections: true,
      connectionLimit: 20,
    });
    console.log("Connected to MySQL");
    return db;
  } catch {
    console.error("Cannot connect to MySQL: ", err);
  }
};

module.exports = initMySQL;
