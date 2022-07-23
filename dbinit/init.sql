CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;
DROP TABLE IF EXISTS test_table;

CREATE TABLE test_table(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) DEFAULT NULL,
    last_name VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    phone VARCHAR(255) DEFAULT NULL,
    address VARCHAR(255) DEFAULT NULL,
    diagnosis VARCHAR(255) DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_test_table_email UNIQUE (email)
);

DELIMITER //
CREATE PROCEDURE create_and_return(IN first_name VARCHAR(255), IN last_name VARCHAR(255), IN email VARCHAR(255), IN phone VARCHAR(255),
                                    IN address VARCHAR(255), IN diagnosis VARCHAR(255), IN image_url VARCHAR(255))
BEGIN
    INSERT INTO test_table (first_name, last_name, email, phone, address, diagnosis , image_url) VALUES (first_name, last_name, email, phone, address, diagnosis, image_url); 
    SET @TEST_ID = LAST_INSERT_ID();
    SELECT * FROM test_table WHERE id = @TEST_ID;
END //
DELIMITER