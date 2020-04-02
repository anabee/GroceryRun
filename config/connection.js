// Set up MySQL connection
// importing MySQL 
var mysql = require("mysql");

// we are making this connection var in order for us to be able to use the if statement below which is set up for Heroku.Heroku needs us to an individual db for it to access. 
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "groceryItems_db"
    });
}

// The following code actually makes the connection
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id "+ connection.threadID);
})

// Here we are exporting the connection so that it can be used by the rest of our app. Specifically the ORM 
module.exports = connection; 