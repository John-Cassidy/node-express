const express = require('express');
const { MongoClient } = require('mongodb');
const sessions = require('../data/sessions.json');

const adminRouter = express.Router();

const { connectionstring } = process.env;

adminRouter.route('/').get((req, res) => {
  const url = 'mongodb://localhost:27017';
  const dbName = 'globomantics';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      console.log('Connected to the mongo DB');

      const db = client.db(dbName);

      const response = await db.collection('sessions').insertMany(sessions);
      res.json(response);
    } catch (error) {
      console.log(error.stack);
    }
    client.close();
  })();
});

module.exports = adminRouter;
