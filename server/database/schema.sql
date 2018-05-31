CREATE DATABASE 909;

USE 909;

DROP TABLE IF EXISTS 'users';

CREATE TABLE `users` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `username`              VARCHAR(100) NOT NULL,
  `display name`          VARCHAR(100) NOT NULL,
  `password`              VARCHAR(100) NOT NULL,
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `email`                 VARCHAR(300) NOT NULL,
  `bio`                   VARCHAR(500) DEFAULT NULL,
  `musician`              TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `text`                  VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               INT(10) NOT NULL
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `users_events`;

CREATE TABLE `users_events` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `id_user`               SMALLINT(10) NOT NULL,
  `id_event`              SMALLINT(10) NOT NULL,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `name`                  VARCHAR(100) NOT NULL,
  `date`                  DATE DEFAULT `TBD`,
  `time`                  TIME DEFAULT `TBD`,
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `id_location`           VARCHAR(300) NOT NULL,
  `host`                  SMALLINT(10) NOT NULL,       
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `event comments`;

CREATE TABLE `events comments` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `message`               VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               SMALLINT(10) NOT NULL,
  `id_event`              SMALLINT(10) NOT NULL,
  PRIMARY KEY(`id`)
);
