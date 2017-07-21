const express = require('express');
const router = express.Router();

// import mongoose
const mongoose = require('mongoose');

// set up default mongoose connection
const mongoDB = 'mongodb://<bread_baker>:<totally4Krill$$>@ds155811.mlab.com:55811/chat_for_learning';
mongoose.connect(mongoDB);

// get default connection
const DB = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
DB.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/events', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  mongoose.get(`${DB}/events`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
