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
    const initQuery = `CREATE TABLE IF NOT EXISTS users(
            email VARCHAR(60),
            username VARCHAR(60),
            role ENUM('Guest', 'Player') DEFAULT 'Guest',
            PRIMARY KEY (email, username)
        );
        CREATE TABLE IF NOT EXISTS FloristryRoom (
        roomID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        roomName VARCHAR(30) NOT NULL,                  
        ownerEmail VARCHAR(60) NOT NULL,               
        maxPlayers INT UNSIGNED DEFAULT 4,            
        isPrivate BOOLEAN DEFAULT FALSE,               
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        FOREIGN KEY (ownerEmail) REFERENCES users(email) 
        );
        CREATE TABLE IF NOT EXISTS FloristryUser (
        email VARCHAR(60),
        username VARCHAR(60),
        roomID INT UNSIGNED,
        roleInRoom ENUM('Player', 'Admin') DEFAULT 'Player', 
        PRIMARY KEY (email, roomID),                        
        FOREIGN KEY (email, username) REFERENCES users(email, username),
        FOREIGN KEY (roomID) REFERENCES FloristryRoom(roomID)
        );
        DELIMITER //
        // CREATE TRIGGER after_delete_user
        // AFTER DELETE ON FloristryUser
        // FOR EACH ROW
        // BEGIN
        // IF NOT EXISTS (
        //  SELECT 1
        // FROM FloristryUser
        // WHERE roomID = OLD.roomID
        // ) THEN
        // DELETE FROM FloristryRoom
        // WHERE roomID = OLD.roomID;
        // END IF;
END //

DELIMITER ;`;
    db.query(initQuery);
    console.log("Create table users completed.");
    return db;
  } catch {
    console.error("Cannot connect to MySQL: ", err);
  }
};

module.exports = initMySQL;
