const express = require('express')
const router = express.Router()
const initMySQL = require('../../database')

// สร้างตัวแปรสร้างฐานข้อมูล 
let mydatabase

(async () => {
    try {
        mydatabase = await initMySQL(); // Initialize the database and get the `db` instance
        console.log('Connect to a Database completed.')
    } catch (err) {
        console.error('Failed to initialize the database:', err);
    }
})();

// Sign Up
router.post('/usersignup', (req, res) => {
    // ตรวจสอบว่า req.body มีข้อมูลครบถ้วน
    const { email, username, userRole } = req.body;

    const user = {
        email: req.body.email,
        username: req.body.username,
        userRole: req.body.userRole
    }

    if (!user.email || !user.username || !user.userRole) {
        return res.status(400).json({ error: 'Missing required fields.' });
    }

    const signinQuery = `INSERT INTO users (email, username, role) VALUES (?, ?, ?)`;

    mydatabase.query(signinQuery, [user.email, user.username, user.userRole], (err, result) => {
        if (err) {
            console.error('Database Error:', err.message);
            return res.status(500).json({ error: 'Failed to sign up. Please try again later.' });
        }

        // หากสำเร็จ
        res.status(201).json({ 
            message: 'User signed up successfully.',
            data: { email, username, userRole } // ส่งข้อมูลกลับ
        });
    });
});
router.get('/', (req,res) => {
    console.log("Hello World")
})

module.exports = router