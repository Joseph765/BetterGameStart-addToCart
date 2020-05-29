DROP DATABASE IF EXISTS cartgames;

CREATE DATABASE cartgames;

\c cartgames;

CREATE TABLE IF NOT EXISTS games (
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