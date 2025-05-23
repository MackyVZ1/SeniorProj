const express = require("express");
const router = express.Router();
const mydatabase = require("../database");
const bcrypt = require("bcrypt"); // ใช้สำหรับ hash password
// api for test
router.get("/", (req, res) => {
  res.send("Hello from API");
});

// สร้างเส้นทางสำหรับ Login / Signin
router.post("/login", (req, res) => {
  // รับค่า Username และ Password จากผู้ใช้
  const username = req.body.username;
  const password = req.body.password;

  console.log("Login attempt:", { username });

  // SQL Statement
  const loginQuery =
    "SELECT userId, users, passw, roleID, status FROM tbdentalrecorduser WHERE users = ?";

  mydatabase.query(loginQuery, [username], async (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    // ตรวจสอบว่ามีผู้ใช้หรือไม่
    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = result[0];
    mydatabase.query(
      "UPDATE tbdentalrecorduser SET status = 1 WHERE userId = ?",
      [user.userId],
      (err, result) => {
        if (err) {
          console.error("Error updating status:", err);
          return res.status(500).json({ message: "Internal Server Error" });
        } else {
          if (user.passw === password) {
            // เข้าสู่ระบบสำเร็จ
            res.status(200).json({
              message: "Login successful",
              userId: user.userId,
              username: user.users,
              roleID: user.roleID,
              status: user.status,
            });
          } else {
            // รหัสผ่านไม่ถูกต้อง
            res.status(401).json({ message: "Invalid username or password" });
          }
        }
      }
    );
  });
});

// สร้างเส้นทางสำหรับ Logout / Signout
router.post("/logout", (req, res) => {
  const username = req.body.username;
  console.log("Logout attempt:", { username });
  // SQL Statement
  const logoutQuery =
    "UPDATE tbdentalrecorduser SET status = 0 WHERE users = ?";
  mydatabase.query(logoutQuery, [username], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    // ออกจากระบบสำเร็จ
    res.status(200).json({ message: "Logout successful" });
  });
});

// เพิ่มช้อมูลเจ้าหน้าที่/อาจารย์/นักเรียน
router.post("/addaccount", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed password:", hashedPassword); // Log the hashed password for debugging

    // SQL Statement
    const addQuery =
      "INSERT INTO admin(username, password, role) VALUES (?, ?, ?)";

    // เพิ่มข้อมูล
    mydatabase.query(
      addQuery,
      [username, hashedPassword, role],
      (err, result) => {
        if (err) {
          console.error("Error adding account:", err);
          res.status(500).send({ message: "Internal Server Error" });
        } else {
          res
            .status(200)
            .send({ message: "Account added successfully", result });
        }
      }
    );
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// เพิ่มข้อมูลคนไข้
router.post("/addpatient", (req, res) => {
  // ข้อมูลที่จะส่ง
  const {
    dn,
    titleTH,
    nameTH,
    surnameTH,
    titleEN,
    nameEN,
    surnameEN,
    sex,
    maritalStatus,
    idNo,
    age,
    address,
    phoneHome,
    phoneOffice,
    emerNotify,
    emerAddress,
    parent,
    parentPhone,
    physician,
    physicianOffice,
    physicianPhone,
    regDate,
    birthDate,
    priv,
    otherAddress,
    rDate,
    bDate,
    fromHospital,
    updateByUserId,
    updateTime,
  } = req.body;

  console.log("Received patient data:", req.body);

  // SQL Statement
  const addpatientQuery = `INSERT INTO t_patient(dn, titleTH, nameTH, surnameTH, titleEN, nameEN, surnameEN, sex, maritalStatus, idNo, age, address, phoneHome, phoneOffice, emerNotify, emerAddress, parent, parentPhone, physician, physicianOffice, physicianPhone, regDate, birthDate, priv, otherAddress, rDate, bDate, fromHospital, updateByUserId, updateTime)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  mydatabase.query(
    addpatientQuery,
    [
      dn,
      titleTH,
      nameTH,
      surnameTH,
      titleEN,
      nameEN,
      surnameEN,
      sex,
      maritalStatus,
      idNo,
      age,
      address,
      phoneHome,
      phoneOffice,
      emerNotify,
      emerAddress,
      parent,
      parentPhone,
      physician,
      physicianOffice,
      physicianPhone,
      regDate,
      birthDate,
      priv,
      otherAddress,
      rDate,
      bDate,
      fromHospital,
      updateByUserId,
      updateTime,
    ],
    (err, result) => {
      if (err) {
        console.error("Error adding patient data:", err);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        console.log("Patient data added successfully:", result);
        res.status(200).json({ message: "Patient data added successfully" });
      }
    }
  );
});

// ค้นหาข้อมูลคนไข้
router.get("/searchpatient", (req, res) => {
  const { dn, id } = req.query; // รับค่า dn, id จาก URL
  console.log("Search patient with dn:", dn);
  // ค้นหาด้วย dn
  if (dn) {
    const searchQuerywithDn = `SELECT dn, idNo, titleTH, nameTh, surnameTh FROM t_patient WHERE dn =?`;
    mydatabase.query(searchQuerywithDn, [dn], (err, resutl) => {
      if (err) {
        console.error(`ค้นหาข้อมูลคนไข้ไม่สำเร็จ: ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (resutl.length === 0) {
        console.log("ไม่พบข้อมูลคนไข้ที่ค้นหา");
        res.status(404).json({ message: "ไม่พบข้อมูลคนไข้ที่ค้นหา" });
      } else {
        console.log(`ค้นหาข้อมูลคนไข้ DN: ${dn}สำเร็จ:`, resutl);
        res.status(200).json(resutl);
      }
    });
  } else if (id) {
    const searchQuerywithId = `SELECT dn, idNo, titleTH, nameTh, surnameTh FROM t_patient WHERE idNo =?`;
    mydatabase.query(searchQuerywithId, [id], (err, resutl) => {
      if (err) {
        console.error(`ค้นหาข้อมูลคนไข้ไม่สำเร็จ: ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (resutl.length === 0) {
        console.log("ไม่พบข้อมูลคนไข้ที่ค้นหา");
        res.status(404).json({ message: "ไม่พบข้อมูลคนไข้ที่ค้นหา" });
      } else {
        console.log(`ค้นหาข้อมูลคนไข้ ID: ${id} สำเร็จ:`, resutl);
        res.status(200).json(resutl);
      }
    });
  } else {
    // ค้นหาคนไข้ทั้งหมด
    const searchQueywithoutId = `SELECT dn, idNo, titleTH, nameTh, surnameTh FROM t_patient`;
    mydatabase.query(searchQueywithoutId, (err, result) => {
      if (err) {
        console.error(`ค้นหาข้อมูลคนไข้ไม่สำเร็จ: ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (result.length === 0) {
        console.log("ไม่พบข้อมูลคนไข้ที่ค้นหา");
        res.status(404).json({ message: "ไม่พบข้อมูลคนไข้ที่ค้นหา" });
      } else {
        console.log(`ค้นหาข้อมูลคนไข้สำเร็จ:`, result);
        res.status(200).json(result);
      }
    });
  }
});

// อัพเดทข้อมูลคนไข้
router.patch("/updatepatient/:dn", (req, res) => {
  const dn = req.params.dn; // รับค่า dn จาก URL
  console.log("Update patient with dn:", dn);
  const {
    titleTH,
    nameTH,
    surnameTH,
    titleEN,
    nameEN,
    surnameEN,
    sex,
    maritalStatus,
    idNo,
    age,
    address,
    phoneHome,
    phoneOffice,
    emerNotify,
    emerAddress,
    parent,
    parentPhone,
    physician,
    physicianOffice,
    physicianPhone,
    regDate,
    birthDate,
    priv,
    otherAddress,
    rDate,
    bDate,
    fromHospital,
    updateByUserId,
    updateTime,
  } = req.body;
  console.log("Received update patient data:", req.body);
  // SQL Statement
  const updateQuery = `UPDATE t_patient SET 
  titleTH = ?,
    nameTH = ?,
    surnameTH = ?,
    titleEN = ?,
    nameEN = ?,
    surnameEN = ?,
    sex = ?,
    maritalStatus = ?,
    idNo = ?,
    age = ?,
    address = ?,
    phoneHome = ?,
    phoneOffice = ?,
    emerNotify = ?,
    emerAddress = ?,
    parent = ?,
    parentPhone = ?,
    physician = ?,
    physicianOffice = ?,
    physicianPhone = ?,
    regDate = ?,
    birthDate = ?,
    priv = ?,
    otherAddress = ?, 
    rDate = ?,
    bDate = ?,
    fromHospital = ?,
    updateByUserId = ?,
    updateTime = ?  WHERE dn = ?`;
  mydatabase.query(
    updateQuery,
    [
      titleTH,
      nameTH,
      surnameTH,
      titleEN,
      nameEN,
      surnameEN,
      sex,
      maritalStatus,
      idNo,
      age,
      address,
      phoneHome,
      phoneOffice,
      emerNotify,
      emerAddress,
      parent,
      parentPhone,
      physician,
      physicianOffice,
      physicianPhone,
      regDate,
      birthDate,
      priv,
      otherAddress,
      rDate,
      bDate,
      fromHospital,
      updateByUserId,
      updateTime,
      dn,
    ],
    (err, result) => {
      if (err) {
        console.error(`อัพเดทข้อมูลคนไข้ไม่สำเร็จ: ${err}`);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (result.affectedRows === 0) {
        console.log("ไม่พบข้อมูลคนไข้ที่ต้องการอัพเดท");
        res.status(404).json({ message: "ไม่พบข้อมูลคนไข้ที่ต้องการอัพเดท" });
      } else {
        console.log(`อัพเดทข้อมูลคนไข้ DN: ${dn} สำเร็จ:`, result);
        res.status(200).json({ message: "อัพเดทข้อมูลคนไข้สำเร็จ" });
      }
    }
  );
});

// ลบข้อมูลคนไข้
router.delete("/deletepatient/:dn", (req, res) => {
  const dn = req.params.dn; // รับค่า dn จาก URL
  console.log("Delete patient with dn:", dn);
  // SQL Statement
  const deleteQuery = `DELETE FROM t_patient WHERE dn = ?`;
  mydatabase.query(deleteQuery, [dn], (err, result) => {
    if (err) {
      console.error(`ลบข้อมูลคนไข้ไม่สำเร็จ: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      console.log("ไม่พบข้อมูลคนไข้ที่ต้องการลบ");
      res.status(404).json({ message: "ไม่พบข้อมูลคนไข้ที่ต้องการลบ" });
    } else {
      console.log(`ลบข้อมูลคนไข้ DN: ${dn} สำเร็จ:`, result);
      res.status(200).json({ message: "ลบข้อมูลคนไข้สำเร็จ" });
    }
  });
});

module.exports = router;
