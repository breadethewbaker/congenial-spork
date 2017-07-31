const express = require('express');
const router = express.Router();

const Event = require('../models/event')
// import mongoose
const mongoose = require('mongoose');

// set up default mongoose connection
const mongoDB = 'mongodb://bread_baker:totally4Krill$$@ds155811.mlab.com:55811/chat_for_learning';
mongoose.connect(mongoDB);

// get default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/events', (req, res, next) => {
  // Get posts from the api
  /*mongoose.get(`${db}/events`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    }); */

  Event.find()
    .then((doc) => res.status(200).json(doc.data));
});

router.post('/events', (req, res, next) => {
  let event = new Event({name:req.body.name});
  event.save();
  });

module.exports = router;
