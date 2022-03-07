CREATE DATABASE IF NOT EXISTS `ingamer_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `ingamer_db`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `avatar` varchar(50),
  `backgroundImage` varchar(50),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8;

DESCRIBE users;

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(100),
  `image` varchar(50),
  `posted` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `likes` int,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8;

DESCRIBE posts;

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postid` int NOT NULL,
  `userid` int NOT NULL,
  `comment` varchar(200) NOT NULL,
  `posted` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `likes` int,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8;

DESCRIBE comments;


CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `avatar` varchar(50),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8;

DESCRIBE friends;


ALTER TABLE `ingamer_db`.`friends` 
ADD INDEX `fk_friend_user_id_idx` (`userid` ASC) VISIBLE;
;
ALTER TABLE `ingamer_db`.`friends` 
ADD CONSTRAINT `fk_friend_user_id`
  FOREIGN KEY (`userid`)
  REFERENCES `ingamer_db`.`users` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


ALTER TABLE `ingamer_db`.`posts` 
ADD INDEX `fk_post_user_id_idx` (`userid` ASC) VISIBLE;
;
ALTER TABLE `ingamer_db`.`posts` 
ADD CONSTRAINT `fk_post_user_id`
  FOREIGN KEY (`userid`)
  REFERENCES `ingamer_db`.`users` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
