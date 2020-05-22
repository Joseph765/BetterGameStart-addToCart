const faker = require('faker');
const fs = require('file-system');
const path = require('path');

const writePath = path.join(__dirname, '/../data2.csv');
const writeData = fs.createWriteStream(writePath);
const str = 'id, gameId, title, publisher, reviewScore, reviewCount, ageRating, newPrice, usedPrice, digitalPrice, storeLocation, inStock\n';
fs.truncate(writePath, 0, () => {

});
writeData.write(str);

function writeTenMillion(writer, encoding, callback) {
  let i = 5000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const id = 10000000 - i;
      const gameId = 10000000 - i;
      const title = `"${faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}')}"`;
      const publisher = `"${faker.fake('{{company.companyName}}')}"`;
      const reviewScore = Math.ceil(Math.random() * 5);
      const reviewCount = Math.ceil(Math.random() * 5000);
      const ageRating = Math.ceil(Math.random() * 6);
      const newPrice = 60;
      const usedPrice = Math.ceil(Math.random() * 55);
      const digitalPrice = Math.floor(Math.random() * (60 - 45 + 1) + 45);
      const storeLocation = `"${faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}}')}"`;
      const inStock = faker.random.boolean();
      const data = `${id}, ${gameId}, ${title}, ${publisher}, ${reviewScore}, ${reviewCount}, ${ageRating}, ${newPrice}, ${usedPrice}, ${digitalPrice}, ${storeLocation}, ${inStock}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillion(writeData, 'utf-8', () => {
  writeData.end();
});
