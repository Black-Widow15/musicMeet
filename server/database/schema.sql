CREATE DATABASE 909;

USE 909;

DROP TABLE IF EXISTS 'users';

CREATE TABLE `users` (
  `id`                    INT(10) NOT NULL AUTO_INCREMENT,
  `username`              VARCHAR(100) NOT NULL,
  `display name`          VARCHAR(100) NOT NULL,
  `password`              VARCHAR(100) NOT NULL,
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `email`                 VARCHAR(300) NOT NULL,
  `bio`                   VARCHAR(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id`                    INT(10) NOT NULL AUTO_INCREMENT,
  `text`                  VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               INT(10) NOT NULL
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users_events`;

CREATE TABLE `users_events` (
  `id`                    INT(10) NOT NULL AUTO_INCREMENT,
  `id_user`               INT(10) NOT NULL,
  `id_event`              INT(10) NOT NULL,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id`                    INT(10) NOT NULL AUTO_INCREMENT,
  `name`                  VARCHAR(100) NOT NULL,
  `date`                  DATE DEFAULT `TBD`,
  `time`                  TIME DEFAULT `TBD`,
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `id_location`           VARCHAR(300) NOT NULL,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `event comments`;

CREATE TABLE `events comments` (
  `id`                    INT(10) NOT NULL AUTO_INCREMENT,
  `message`               VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               INT(10) NOT NULL,
  `id_event`              INT(10) NOT NULL,
  PRIMARY KEY(`id`)
);
