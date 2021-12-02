const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
// const passport = require('passport');

const authRouter = express.Router();

authRouter.route('/signUp').post((req, res) => {
  res.json(req.body);
});

module.exports = authRouter;
