var mysql = require('mysql');

if (print.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "wvj46Tc3xGqp",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
})

module.exports = connection;