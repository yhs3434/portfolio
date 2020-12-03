const express = require('express');
const router = express.Router();

// mysql setup
const mysqlLib = require('../lib/mysql');
const conn = mysqlLib.connection();
// mysqlLib.start(conn);
const execQuery = mysqlLib.execQuery;

router.get('/', (req, res, next) => {
    res.send('tech');
});

router.get('/category', async (req, res, next) => {
    const category = req.query.q;
    let rows;
    if (category === 'all') {
        rows = await execQuery(conn, `SELECT * FROM tech`);
    } else {
        rows = await execQuery(conn, `SELECT * FROM tech WHERE category = '${category}'`);
    }
    const datas = new Array();

    for (const row of rows) {
        datas.push(row);
    }
    res.send(datas);
});

module.exports = router;