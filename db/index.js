const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'mkdsjjj7',
  host: 'ec2-18-217-238-139.us-east-2.compute.amazonaws.com',
  database: 'cartgames',
  port: 5432,
});

client.connect();


const getGame = (id, cb) => {
  client.query(`SELECT * FROM games WHERE id=${id}`, (err, game) => {

    const arr = [];

    for (let i = 0; i < game.rows.length; i ++) {
      const obj = {};
      obj.id = game.rows[i].id;
      obj.ageRating = game.rows[i].agerating;
      obj.digitalPrice = game.rows[i].digitalprice;
      obj.gameId = game.rows[i].gameid;
      if (game.rows[i].instock === 'true') {
        obj.inStock = true;
      } else {
        obj.inStock = false;
      }
      obj.newPrice = game.rows[i].newprice;
      obj.publisher = game.rows[i].publisher;
      obj.reviewCount = game.rows[i].reviewcount;
      obj.reviewScore = game.rows[i].reviewscore;
      obj.storeLocation = game.rows[i].storelocation;
      obj.title = game.rows[i].title;
      obj.usedPrice = game.rows[i].usedprice;
      arr.push(obj);
    }
    if (err) {
      return cb(err, null);
    }
    return cb(null, arr);
  });
};

module.exports = {
  getGame,
};
