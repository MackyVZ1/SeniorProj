const express = require('express')
const mysql = require('mysql2')
const router = express.Router()
const initMySQL = require('../../database')

initMySQL()

// Sign in
router.post('/usersignup', (req,res) => {
    const [userEmail, username, userRole] = req.body
    const signinQuery = `INSERT INTO users (email, username, role) VALUES (?)`
})
router.get('/', (req,res) => {
    console.log("Hello World")
})

module.exports = router