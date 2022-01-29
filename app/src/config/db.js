const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-page.ca9t9upyttvp.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "yallu420401",
    database: "login_page",
});

db.connect();

module.exports = db;