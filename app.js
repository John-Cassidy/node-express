const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;
const sessionsRouter = require('./src/routers/sessionsRouter');

app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/sessions', sessionsRouter);

app.get('/', (req, res) => {
  res.render('index', { title: 'Globomantics', data: ['a', 'b', 'c'] });
});

app.listen(PORT, () => {
  console.log(`listening on port ${chalk.green(PORT)}`);
});
