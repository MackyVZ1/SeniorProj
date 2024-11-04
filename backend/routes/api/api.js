const express = require('express')
const mysql = require('mysql2')
const router = express.Router()
const initMySQL = require('../../database')

initMySQL()

router.get('/', (req,res) => {
    console.log("Hello World")
})

module.exports = router