const express = require('express');
const mysql = require('mysql');
const sql = require('./sql');
const app = express();
const port = 3000;

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.connect();

app.get('/', (req, res) => {
  //query
  const query = 'Select * from questions';
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.log(error);
      return;
    }

    const { favorite_anime, least_faviourite, most_hated } = results[0];

    console.log(favorite_anime, least_faviourite, most_hated);
  });

  res.send('this is working');
});

app.get('/reviews', sql.anime);

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
