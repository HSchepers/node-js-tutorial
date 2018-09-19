const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "guest",
    password: "login",
    database: "securitygame"
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database");

    //var sql = 'select count(user) from users where user = "HSchepers" and auth_string = password("Password123")';
    var sql = 'select * from securitygame.scores';

    var result = connection.query(sql, function (err, rows, fields) {
      if (err) throw err;
      
      console.log(rows[0]);

      return rows;
    });
    connection.end();
});