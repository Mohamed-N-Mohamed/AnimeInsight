import express from 'express';
import mysql from 'mysql';
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'anime',
});

connection.connect();

//query
const query = 'Select * from questions';
connection.query(query, (error, results, fields) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(results);
});

app.get('/', (req, res) => {
  res.send('this is working');
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
