const express = require('express');
const router = express.Router();
const mydatabase = require('../database');

// สร้างเส้นทางสำหรับ Login / Signin
router.post('/login', (req,res) => {
    // รับค่า Username และ Password จากผู้ใช้
    const username = req.body.username;
    const password = req.body.password;
    // SQL Statement
    const loginQuery = "SELECT username, role FROM admin WHERE username = ? AND password = ?";

    // ค้นหาข้อมูลจากฐานข้อมูล
    mydatabase.query(loginQuery, [username, password], (err, result) => {
        // ถ้าเกิดข้อผิดพลาด
        if(err){
            res.send({err: err});
        }
        if(result.length > 0){
            res.send(result);
        }else{
            res.send({message: "Wrong username or password"});
        }
    });
});


module.exports = router;