const mysql = require("mysql");
// creer une connexion mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "teningThiam2002!",
	database: 'ISEP_TV_Show_DB'
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("connected to mysql");
	}
});


module.exports = con;