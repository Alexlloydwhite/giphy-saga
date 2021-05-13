CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (200) NOT NULL,
	"category_id" integer REFERENCES category
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- dummy data
INSERT INTO "favorites" VALUES
(1000, 'http://giphy.com/funny', 1),
(1001, 'http://giphy.com/cohort', 2),
(1002, 'http://giphy.com/cartoon', 3),
(1003, 'http://giphy.com/nsfw', 4),
(1004, 'http://giphy.com/meme', 5);

-- join tables as such
SELECT * FROM favorites f
JOIN category c ON c.id = f.category_id;
