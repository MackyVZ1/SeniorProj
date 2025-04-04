const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// แปลงข้อมูลเป็น .json
app.use(express.json());

// ใช้งาน cors สำหรับการทำ Cross-Origin Resource Sharing ควบคุมการเข้าถึงข้อมูลระหว่างเว็บไซต์
// ใช้ app.use(cors(origin:'*')) สำหรับการทดสอบเท่านั้น
// ใช้จริงจะเปลี่ยน domain เป็น ของมอ
app.use(cors())

// สร้างเส้นทาง
app.use('/api', require('./routes/api'));

// app.get("/", (req, res) => {
//     res.json({msg: "Hello"})
// })

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});