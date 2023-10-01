CREATE TABLE IF NOT EXISTS users (
    _id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)  NOT NULL,
    gender VARCHAR(25),
    sexualPreferences VARCHAR(255),
    bio VARCHAR(600),
    interesting TEXT[],
    email VARCHAR(255) UNIQUE NOT NULL,
    rating VARCHAR(255)
);


