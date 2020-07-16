const models = require('../db/db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')

var $sql = require('../db/sqlMap')

//connect to DB
var conn = mysql.createConnection(models.mysql)
var jsonWrite = (res, ret) => {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: 'Operation failed'
        })
    } else {
        res.json(ret)
    }
};


//Adding User interface
router.post('/addUser', (req, res) => {
    var insert = $sql.user.add
    var params = req.body
    console.log(params)

    conn.query(insert, [params.name, params.price], function (err, result) {

        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})


//Add user rsespnse
router.get('/addUser', (req, res) => {
    res.send('returnJson')
})

module.exports = router

