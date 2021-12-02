const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const sessionsRouter = express.Router();

sessionsRouter.route('/').get((req, res) => {
  const url = 'mongodb://localhost:27017';
  const dbName = 'globomantics';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      console.log('Connected to the mongo DB');

      const db = client.db(dbName);

      const sessions = await db.collection('sessions').find().toArray();
      res.render('sessions', {
        sessions,
      });
    } catch (error) {
      console.log(error.stack);
    }
    client.close();
  })();
});

sessionsRouter.route('/:id').get((req, res) => {
  const id = req.params.id;
  const url = 'mongodb://localhost:27017';
  const dbName = 'globomantics';

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      console.log('Connected to the mongo DB');

      const db = client.db(dbName);

      const session = await db
        .collection('sessions')
        .findOne({ _id: new ObjectID(id) });

      res.render('session', {
        session,
      });
    } catch (error) {
      console.log(error.stack);
    }
    client.close();
  })();
});

module.exports = sessionsRouter;
