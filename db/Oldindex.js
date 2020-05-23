const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cartgames', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB ${db.host}:${db.port}`);
});

db.on('error', console.error.bind(console, 'connection error:'));

const schema = new mongoose.Schema({
  id: Number,
  gameId: Number,
  title: String,
  publisher: String,
  reviewScore: Number,
  reviewCount: Number,
  ageRating: String,
  newPrice: Number,
  usedPrice: Number,
  digitalPrice: Number,
  storeLocation: String,
  inStock: Boolean,
});

const Game = mongoose.model('Game', schema)

const save = (game) => {
  const newGame = new Game({
    id: game.id,
    gameId: game.gameId,
    title: game.title,
    publisher: game.publisher,
    reviewScore: game.reviewScore,
    reviewCount: game.reviewCount,
    ageRating: game.ageRating,
    newPrice: game.newPrice,
    usedPrice: game.usedPrice,
    digitalPrice: game.digitalPrice,
    storeLocation: game.storeLocation,
    inStock: game.inStock,
  });

  newGame.save((err) => {
    if (err) {
      return console.log(err);
    }
  });
};

const getGame = (id, cb) => {
  Game.find({ id }, (err, game) => {
    if (err) {
      return cb(err, null);
    }
    return cb(null, game);
  });
};

const deleteAll = () => {
  Game.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  save,
  getGame,
  deleteAll,
};