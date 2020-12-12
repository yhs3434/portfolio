const express = require('express');
const router = express.Router();

// mysql setup
const mysqlLib = require('../lib/mysql');
const conn = mysqlLib.connection();
// mysqlLib.start(conn);
const execQuery = mysqlLib.execQuery;

router.get('/', (req, res, next) => {
    res.send('tech home');
});

router.get('/test', async (req, res, ext) => {
    try{
        const sql = 'select * from tech';
        const rows = await execQuery(conn, sql);
        
        console.log('rows', rows);
        res.send(rows);
    } catch (e) {
        console.error(e);
        res.send(e);
    }
})

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

router.get('/detail/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const sql = 'SELECT id, title, content, category, \
                        UNIX_TIMESTAMP(`created`) as created, \
                        UNIX_TIMESTAMP(`changed`) as changed \
                        FROM tech WHERE id = ' + id.toString();
        const rows = await execQuery(conn, sql);
        if (rows.length > 0) {
            const row = rows[0];
            res.send({
                status: 'success',
                data: row
            });
        } else {
            res.send({
                status: 'fail',
                data: {}
            })
        }
    } catch (e) {
        res.send({
            status: 'error',
            data: e
        })
    }
    
})

module.exports = router;