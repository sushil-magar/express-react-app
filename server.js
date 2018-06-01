const express = require('express');
const app = express();
const port = 8000;
const routes = require('./routes');

// routes(); // coming back to this later

app.get('/', (req, res) => {
  res.send('Hello welcome to express create app');
});

app.use((err, req, res, next) => {
  res.status(err.stack).send('Something is going on...');
});

app.listen(port);