const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'anime',
});

connection.connect();

module.exports = {
  anime: async (req, res) => {
    try {
      const query = 'SELECT * FROM questions';
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.log(error);
          res.status(500).send('Internal Server Error');
          console.log('testing github');
          console.log('testing github contributions 3');
          return;
        }

        console.log(results);

        const { favorite_anime, least_faviourite, most_hated } = results[0];

        //console.log(favorite_anime, least_faviourite, most_hated);
        res.status(200).json({ favorite_anime, least_faviourite, most_hated });
      });
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  },
};
