const mysqlConnection = () => {
    const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1313',
        database: 'hansolyoon'
    });

    return connection;
}

const mysqlStart = (conn) => {
    conn.connect();
}

const mysqlEnd = (conn) => {
    conn.end();
}

const mysqlExecQuery = (conn, query) => {
    return new Promise((resolve, reject) => {
        conn.query(query, (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

module.exports.connection = mysqlConnection;
module.exports.start = mysqlStart;
module.exports.end = mysqlEnd;
module.exports.execQuery = mysqlExecQuery;