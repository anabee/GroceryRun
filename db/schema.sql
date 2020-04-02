DROP DATABASE IF EXISTS groceryItems_db;

CREATE DATABASE groceryItems_db;

USE groceryItems_db;

CREATE TABLE groceries (
    id INT NOT NULL AUTO_INCREMENT,
    grocery_item VARCHAR(255) NOT NULL,
    purchased BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);