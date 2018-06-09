
DROP DATABASE IF EXISTS beatsmeet;
CREATE DATABASE beatsmeet;
USE beatsmeet;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `username`              VARCHAR(100) NOT NULL UNIQUE,
  `display_name`          VARCHAR(100) DEFAULT NULL,
  `password`              VARCHAR(100) NOT NULL,
  `imgurl`                VARCHAR(500) DEFAULT NULL,
  `email`                 VARCHAR(300) NOT NULL,
  `bio`                   VARCHAR(300) DEFAULT NULL,
  `musician`              TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `text`                  VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `username`              VARCHAR(100) NOT NULL,
  `sender`                VARCHAR(100) DEFAULT 'anonymous',
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
  `date`                  DATE NOT NULL,
  `time`                  TIME NOT NULL,
  `address`               VARCHAR(300) DEFAULT NULL,
  `city`                  VARCHAR(100) DEFAULT NULL,
  `description`           VARCHAR(500) DEFAULT NULL,
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `host`                  VARCHAR(100) NOT NULL,
  PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `event_comments`;
CREATE TABLE `event_comments` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `message`               VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               SMALLINT(10) NOT NULL,
  `id_event`              SMALLINT(10) NOT NULL,
  PRIMARY KEY(`id`)
);