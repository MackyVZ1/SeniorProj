const express = require('express');
const router = express.Router();
const mydatabase = require('../database');
const bcrypt = require('bcrypt'); // ใช้สำหรับ hash password
// api for test
router.get('/', (req,res) => {
    res.send("Hello from API");
})

// สร้างเส้นทางสำหรับ Login / Signin
router.post('/login', (req, res) => {
    // รับค่า Username และ Password จากผู้ใช้
    const username = req.body.username;
    const password = req.body.password;

    console.log('Login attempt:', { username });

    // SQL Statement
    const loginQuery = "SELECT userId, users, passw, roleID, status FROM tbdentalrecorduser WHERE users = ?";

    mydatabase.query(loginQuery, [username], async (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // ตรวจสอบว่ามีผู้ใช้หรือไม่
        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = result[0];
        mydatabase.query("UPDATE tbdentalrecorduser SET status = 1 WHERE userId = ?", [user.userId], (err, result) => {
            if (err) {
                console.error('Error updating status:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }else{
                if (user.passw === password) {
                    // เข้าสู่ระบบสำเร็จ
                    res.status(200).json({
                        message: 'Login successful',
                        userId: user.userId,
                        username: user.users,
                        roleID: user.roleID,
                        status: user.status
                    });
                } else {
                    // รหัสผ่านไม่ถูกต้อง
                    res.status(401).json({ message: 'Invalid username or password' });
                }
            }
        });
    });
});

// สร้างเส้นทางสำหรับ Logout / Signout
router.post('/logout', (req, res) => {
    const username = req.body.username;
    console.log('Logout attempt:', { username });
    // SQL Statement
    const logoutQuery = "UPDATE tbdentalrecorduser SET status = 0 WHERE users = ?";
    mydatabase.query(logoutQuery, [username], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        // ออกจากระบบสำเร็จ
        res.status(200).json({ message: 'Logout successful' });
    });

})

// เพิ่มช้อมูลเจ้าหน้าที่/อาจารย์/นักเรียน
router.post("/addaccount", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    try {
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed password:', hashedPassword); // Log the hashed password for debugging

        // SQL Statement
        const addQuery = "INSERT INTO admin(username, password, role) VALUES (?, ?, ?)";

        // เพิ่มข้อมูล
        mydatabase.query(addQuery, [username, hashedPassword, role], (err, result) => {
            if (err) {
                console.error('Error adding account:', err);
                res.status(500).send({ message: 'Internal Server Error' });
            } else {
                res.status(200).send({ message: 'Account added successfully', result });
            }
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// เพิ่มข้อมูลคนไข้
router.post("/addpatient", (req, res) => {
    // ข้อมูลที่จะส่ง
    const {
        dn, titleTH, nameTH, surnameTH, titleEN, nameEN, surnameEN, sex, maritalStatus, idNo, age, 
        address, phoneHome, phoneOffice, emerNotify, emerAddress, parent, parentPhone, 
        physician, physicianOffice, physicianPhone, regDate, birthDate, priv, otherAddress, 
        rDate, bDate, fromHospital, updateByUserId, updateTime
    } = req.body;

    console.log('Received patient data:', req.body);

    // SQL Statement
    const addpatientQuery = `INSERT INTO t_patient(dn, titleTH, nameTH, surnameTH, titleEN, nameEN, surnameEN, sex, maritalStatus, idNo, age, address, phoneHome, phoneOffice, emerNotify, emerAddress, parent, parentPhone, physician, physicianOffice, physicianPhone, regDate, birthDate, priv, otherAddress, rDate, bDate, fromHospital, updateByUserId, updateTime)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    mydatabase.query(addpatientQuery, [
        dn, titleTH, nameTH, surnameTH, titleEN, nameEN, surnameEN, sex, maritalStatus, idNo, age, address, phoneHome, phoneOffice, emerNotify, emerAddress, parent, parentPhone, physician, physicianOffice, physicianPhone, regDate, birthDate, priv, otherAddress, rDate, bDate, fromHospital, updateByUserId, updateTime
    ], (err, result) => {
        if (err) {
            console.error('Error adding patient data:', err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('Patient data added successfully:', result);
            res.status(200).json({ message: 'Patient data added successfully' });
        }
    });
});

module.exports = router;