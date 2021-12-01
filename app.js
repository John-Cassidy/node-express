const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
  res.send('Hello from my node-express');
});

app.listen(PORT, () => {
  console.log(`listening on port ${chalk.green(PORT)}`);
});
