-- insert queries to populate the `tacos` table with at least three entries.


USE tacos_db;
INSERT INTO tacos (taco_name, shell, veg, picked_up)
VALUES 
("Monster Taco", "hard", false, false),
("Johnny Taco", "hard", true, false),
("Loopy Taco", "soft", false, false),
("Guac Taco", "soft", true, false);