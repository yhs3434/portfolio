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

const mysqlExecQuery = (conn, sql) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

const mysqlExecQueryWithValues = (conn, sql, values) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, values, (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

module.exports.connection = mysqlConnection;
module.exports.start = mysqlStart;
module.exports.end = mysqlEnd;
module.exports.execQuery = mysqlExecQuery;
module.exports.execQueryWithValues = mysqlExecQueryWithValues;