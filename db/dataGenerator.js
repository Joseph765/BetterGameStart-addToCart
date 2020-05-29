const faker = require('faker');
const fs = require('file-system');
const path = require('path');

const writePath = path.join(__dirname, '/../data2.csv');
const writeData = fs.createWriteStream(writePath);
const str = 'id, ageRating, digitalPrice, gameId, inStock, newPrice, publisher, reviewCount, reviewScore, storeLocation, title, usedPrice\n';
writeData.write(str);

// function writeTenMillion(writer, encoding, callback) {
//   let i = 5000000;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       console.log(5000000 - i);
//       const data = `${5000000 - i}|${Math.ceil(Math.random() * 6)}|${Math.floor(Math.random() * (60 - 45 + 1) + 45)}|${5000000 - i}|"${faker.random.boolean()}"|${60}|"${faker.fake('{{company.companyName}}')}"|${Math.ceil(Math.random() * 5000)}|${Math.ceil(Math.random() * 5)}|"${faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}}')}"|"${faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}')}"|${Math.ceil(Math.random() * 55)}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

function writeTenMillion(writer, encoding, callback) {
  let i = 5000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      console.log(10000000 - i);
      const data = `${10000000 - i}|${Math.ceil(Math.random() * 6)}|${Math.floor(Math.random() * (60 - 45 + 1) + 45)}|${10000000 - i}|"${faker.random.boolean()}"|${60}|"${faker.fake('{{company.companyName}}')}"|${Math.ceil(Math.random() * 5000)}|${Math.ceil(Math.random() * 5)}|"${faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}}')}"|"${faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}')}"|${Math.ceil(Math.random() * 55)}\n`;
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
