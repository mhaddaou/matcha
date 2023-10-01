CREATE TABLE IF NOT EXISTS users (
    _id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255),
    gender VARCHAR(25),
    sexualPreferences VARCHAR(255),
    bio VARCHAR(600),
    interesting TEXT[],
    email VARCHAR(255) UNIQUE,
    rating VARCHAR(255)
);
