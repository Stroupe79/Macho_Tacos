-- In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

--    * Create the `tacos_db`.
--    * Switch to or use the `tacos_db`.
--    * Create a `tacos` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **taco_name**: a string.
--      * **shell**: a string (soft/hard ~ flour/corn)
--      * **vegetarian**: a boolean
--      * **picked_up**: a boolean.


     CREATE DATABASE tacos_db;
     USE tacos_db;
     CREATE TABLE tacos (
         id INT (5) AUTO_INCREMENT PRIMARY KEY,
         taco_name VARCHAR (100),
         shell VARCHAR (10),
         veg BOOLEAN,
         picked_up BOOLEAN
     );