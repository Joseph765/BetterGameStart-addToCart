const express = require('express');
const bodyParser = require('body-parser');
// const db;

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

//TO-DO: api get router

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
