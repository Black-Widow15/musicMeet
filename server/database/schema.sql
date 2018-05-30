CREATE DATABASE bwMeetup;

-- USE chat;
-- DROP TABLE IF EXISTS 'users'

CREATE TABLE users (
id INT AUTO_INCREMENT,
name VARCHAR(200),
password VARCHAR(200) DEFAULT NULL,
avatar VARCHAR(200),
email VARCHAR(200),
bio VARCHAR(1000),
PRIMARY KEY (id),

-- ADD FOREIGN KEY (userId) REFERENCES 'users' ('id');
);

CREATE TABLE messages (
id INT AUTO_INCREMENT,
title VARCHAR(200),
text VARCHAR(1000),
userId INT,
date DATETIME,
eventId INT,
FOREIGN KEY (userId) REFERENCES users(Id),
FOREIGN KEY (eventId) REFERENCES events(Id),
)

CREATE TABLE events (
id INT AUTO_INCREMENT,
title VARCHAR(200),
date Date,
time Time,
locationId INT,
FOREIGN KEY (locationId) REFERENCES locations(Id),

)

CREATE TABLE artists (
id INT AUTO_INCREMENT,
name VARCHAR(200),
genre VARCHAR(200),

)

CREATE TABLE locations (
id INT AUTO_INCREMENT,
name VARCHAR(200),

)

CREATE TABLE joinArtistEvent (
id INT AUTO_INCREMENT,
eventId INT,
artistId INT,
FOREIGN KEY (eventId) REFERENCES events(Id),
FOREIGN KEY (artistId) REFERENCES artists(Id),

)

CREATE TABLE joinUserEvent (
id INT AUTO_INCREMENT,
eventId INT,
userId INT,
FOREIGN KEY (eventId) REFERENCES events(Id),
FOREIGN KEY (userId) REFERENCES users(Id),

)



















