const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: '909'
});

connection.connect((err) => {
  if (err) console.error(err);
  console.log('connected to database! :D');
});

exports.connection = connection;