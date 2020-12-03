const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// mysql setup
const mysqlLib = require('../lib/mysql');
const conn = mysqlLib.connection();
const execQuery = mysqlLib.execQuery;
const execQueryWithValues = mysqlLib.execQueryWithValues;

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource auth');
});

router.post('/signup', (req, res, next) => {
    const {email, pwd, name, gender, birth} = req.body;
    crypto.randomBytes(64, (err, buf) => {
        const salt = buf.toString('base64');
        crypto.pbkdf2(pwd, salt, 102316, 64, 'sha512', async (err, key) => {
            const keyString = key.toString('base64');
            const sql = `INSERT INTO auth (email, pwd, name, gender, birth, salt) VALUES ?`;
            const values = [
                [email, key.toString('base64'), name, gender, birth, salt]
            ]
            const rows = await execQueryWithValues(conn, sql, values);

            res.send(rows);
        })
    })
})

module.exports = router;