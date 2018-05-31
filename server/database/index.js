const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'beatsmeet'
});

connection.connect((err) => {
  if (err) console.error(err);
  console.log('connected to database! :D');
});

exports.connection = connection;