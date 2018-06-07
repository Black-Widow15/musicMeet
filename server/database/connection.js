const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'beatsmeet',
});

connection.connect((err) => {
  if (err) console.error(err);
  console.log('Magical sparkles happening in the database');
});

exports.connection = connection;
