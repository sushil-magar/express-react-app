const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  console.log('Running express server...');
  res.send('Lets start coding.');
});

app.listen(port);