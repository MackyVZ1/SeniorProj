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

// Sign In
router.post('/usersignin', (req, res) => {
    // รับข้อมูล user
    const user = {
        email: req.body.email,
        username: req.body.username,
        role: req.body.role
    }

    // เช็คว่ารับค่ามาครบมั้ย
    if(!user.email || !user.username || !user.role){
        res.status(400).json({error: 'Missing required fields.'})
    }

    // สร้าง query เพื่อดึงข้อมูลจากฐานข้อมูล
    const signinQuery = `SELECT email FROM users WHERE email = ? AND username = ?`
    mydatabase.query(signinQuery, [user.email, user.username], (err, result) => {
        if(err){
            console.error('Database Error:', err.message);
            return res.status(500).json({ error: 'Database error while checking user.' });
        }
        // หากพบผู้ใช้ในระบบ
        if (result.length > 0) {
            return res.status(200).json({ message: 'User found.', user: result[0] });
        }

        // หากไม่พบผู้ใช้ ให้ทำการสมัคร (Sign Up)
        const signupQuery = `INSERT INTO users (email, username, role) VALUES (?, ?, ?)`;
        mydatabase.query(signupQuery, [user.email, user.username, user.role], (err, result) => {
            if (err) {
                console.error('Database Error:', err.message);
                return res.status(500).json({ error: 'Failed to sign up. Please try again later.' });
            }

            // ส่งคำตอบเมื่อสมัครสำเร็จ
            res.status(201).json({ message: 'User signed up successfully.', userId: result.insertId });
        });
    })
});
router.get('/', (req,res) => {
    console.log("Hello World")
})

module.exports = router