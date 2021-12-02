const express = require('express');
const chalk = require('chalk');
const path = require('path');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const { PORT = 3000 } = process.env;

const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter');
const authRouter = require('./src/routers/authRouter');

// add middleware in order
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'globomantics' }));

require('./src/config/passport.js')(app);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/sessions', sessionsRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render('index', { title: 'Globomantics', data: ['a', 'b', 'c'] });
});

app.listen(PORT, () => {
  console.log(`listening on port ${chalk.green(PORT)}`);
});
