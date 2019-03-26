CREATE DATABASE burger_db;


USE burger_db;


CREATE TABLE `burger` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255) NOT NULL,
  `devoured` boolean default false,
  PRIMARY KEY ( `id` ) 
);