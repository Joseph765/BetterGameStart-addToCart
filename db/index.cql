DROP KEYSPACE IF EXISTS cartgames;

CREATE keyspace cartgames WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE cartgames;

CREATE TABLE games (
  id int PRIMARY KEY,
  ageRating int,
  digitalPrice int,
  gameId int,
  inStock text,
  newPrice int,
  publisher text,
  reviewCount int,
  reviewScore int,
  storeLocation text,
  title text,
  usedPrice int
);

-- COPY games FROM '../data.csv' WITH DELIMITER = ',' AND HEADER = TRUE;

