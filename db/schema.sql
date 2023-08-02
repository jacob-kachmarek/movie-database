DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movie_names (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mov_name VARCHAR(30)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    review TEXT,
    movie_id INT,
    FOREIGN KEY (movie_id)
    REFERENCES movie_names(id)
    ON DELETE SET NULL
);