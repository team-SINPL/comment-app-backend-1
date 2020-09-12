CREATE DATABASE commentApp;
USE commentApp;

CREATE TABLE posts(
	id INT NOT NULL auto_increment,
    heading VARCHAR(100) NOT null,
    content VARCHAR(1000) NOT NULL,
    excelentCount INT DEFAULT 0,
    goodCount INT DEFAULT 0,
	PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1;

INSERT INTO posts VALUES (1, 'first heading', 'first content', 0, 0 );

CREATE TABLE comments(
	id INT NOT NULL auto_increment,
	content VARCHAR(100) NOT null,
    type VARCHAR(10) NOT null,
    agreeCount INT DEFAULT 0,
    disagreeCount INT DEFAULT 0,
    postId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE
)ENGINE=InnoDB AUTO_INCREMENT=1;

CREATE TABLE replies(
	id INT NOT NULL auto_increment,
	content VARCHAR(100) NOT null,
    agreeCount INT DEFAULT 0,
    disagreeCount INT DEFAULT 0,
    postId INT,
    commentId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (commentId) REFERENCES comments(id) ON DELETE CASCADE
)ENGINE=InnoDB AUTO_INCREMENT=1;