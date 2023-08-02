const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movies_db'
    },
    console.log('Connected to the movies_db database.')
);

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM movie_names', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
            console.log('Data Received')
        }
    })
});

app.get('/api/reviews', (req, res) => {
    db.query('SELECT * FROM reviews', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
            console.log('Data Received')
        }
    })
});

app.post('/api/add-movie', (req, res) => {
    db.query(`INSERT INTO movie_names (mov_name) VALUES ('Toy Story')`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
            console.log('Movie added!')
        }
    })
});

app.put('/api/review/:id', (req, res) => {
    db.query(`UPDATE reviews SET review = 'This movie is great!' WHERE id = 2`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
            console.log('Review added!')
        }
    })
});

app.delete('/api/movie/:id', (req, res) => {
    db.query(`DELETE FROM movie_names WHERE id = 2`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
            console.log('Movie deleted!')
        }
    })
});


app.listen(PORT, () => {
    console.log(PORT);
});