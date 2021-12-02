const passport = require('passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user); // return mocked done function and user passed in
    // normally we would get user from database or other user storage location
  });

  passport.deserializeUser((user, done) => {
    done(null, user); // return mocked done function and user passed in
    // normally we would get user from database or other user storage location
  });
};
