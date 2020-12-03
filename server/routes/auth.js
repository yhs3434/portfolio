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
    const {email, password, name, gender, birth} = req.body;
    crypto.randomBytes(64, (err, buf) => {
        const salt = buf.toString('base64');
        crypto.pbkdf2(password, salt, 102316, 64, 'sha512', async (err, key) => {
            const keyString = key.toString('base64');
            const sql = `INSERT INTO auth (email, password, name, gender, birth, salt) VALUES ?`;
            const values = [
                [email, keyString, name, gender, birth, salt]
            ]
            try {
                const rows = await execQueryWithValues(conn, sql, [values]);
                res.send({
                    status: 'success',
                    result: rows
                });
            } catch (err) {
                res.send({
                    status: 'error',
                    result: err
                })
            }
        })
    })
})

// success : sign in success.
// fail : password does not match.
// error : etc error.
router.get('/signin', async (req, res, next) => {
    const {email, password} = req.body;
    const sql = 'SELECT password, salt FROM auth WHERE email = ?';
    const values = [email];
    try {
        const rows = await execQueryWithValues(conn, sql, values);
        const passwordDB = rows[0].password;
        const saltDB = rows[0].salt;
        crypto.pbkdf2(password, saltDB, 102316, 64, 'sha512', (err, key) => {
            if (key.toString('base64') === passwordDB) {
                res.send({
                    status: 'success',
                    result: {}
                })
            } else {
                res.send({
                    status: 'fail',
                    result: {}
                })
            }
        })
    } catch (err) {
        res.send({
            status: 'error',
            result: err
        })
    }
})

module.exports = router;