
DROP DATABASE IF EXISTS beatsmeet;
CREATE DATABASE beatsmeet;
USE beatsmeet;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `username`              VARCHAR(100) NOT NULL,
  `display_name`          VARCHAR(100) NOT NULL,
  `password`              VARCHAR(100) NOT NULL,
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `email`                 VARCHAR(300) NOT NULL,
  `bio`                   VARCHAR(500) DEFAULT NULL,
  `musician`              TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT UC_User UNIQUE (id, username)
);

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `text`                  VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               INT(10) NOT NULL,
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
  `imgurl`                VARCHAR(300) DEFAULT NULL,
  `id_location`           VARCHAR(300) NOT NULL,
  `host`                  SMALLINT(10) NOT NULL,       
  PRIMARY KEY(`id`),
  CONSTRAINT UC_Events UNIQUE (id, name)
);

DROP TABLE IF EXISTS `event_comments`;
CREATE TABLE `events_comments` (
  `id`                    SMALLINT(10) NOT NULL AUTO_INCREMENT,
  `message`               VARCHAR(300) DEFAULT NULL,
  `timestamp`             TIMESTAMP,
  `id_user`               SMALLINT(10) NOT NULL,
  `id_event`              SMALLINT(10) NOT NULL,
  PRIMARY KEY(`id`)
);
