const mysql = require ('mysql');

const conn = mysql.createConnection({
    user:'root',
    host:"localhost",
    password:"",
    database:'jewelries3_7'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = conn;