const express = require('express')
const cors = require('cors')
const app = express()

// แปลงข้อมูลเป็น .json
app.use(express.json());

// ใช้งาน cors สำหรับการทำ Cross-Origin Resource Sharing ควบคุมการเข้าถึงข้อมูลระหว่างเว็บไซต์
// ใช้ app.use(cors()) สำหรับการทดสอบเท่านั้น
// ใช้จริงจะเปลี่ยน domain เป็น ของมอ
app.use(cors({
    origin:'*'
}))

// สร้างเส้นทาง
app.use('/api', require('./routes/api'));

app.get("/", (req, res) => {
    res.json({msg: "Hello"})
})

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});