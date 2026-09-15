const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "skillora"
});

db.connect(function (error) {

    if (error) {
        console.log("Database connection failed!");
        console.log(error.message);
        return;
    }

    console.log("MySQL connected successfully!");
});

module.exports = db;