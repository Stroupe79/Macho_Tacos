-- insert queries to populate the `tacos` table with at least three entries.


USE tacos_db;
INSERT INTO tacos (taco_name, veg, shell, picked_up)
VALUES 
("Monster Taco",  false, "hard", false),
("Johnny Taco",  true, "hard", false),
("Loopy Taco", false, "soft", false),
("Guac Taco", true, "soft", false);