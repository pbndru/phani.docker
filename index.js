const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send("Phani app is working");
});

app.listen(port, (err) => {
  console.log(`running server on port: ${port}`);
});