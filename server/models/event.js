// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const eventSchema = new Schema({
  name: { type: String, required: true, unique: true },
  venue: { type: String, required: true },
  /*location: { type: String, required: true },
  date: { type: Date, required: true },
  verified: Boolean,
  meta: {
    website: String
  }, */
  created_at: Date,
  updated_at: Date
});

eventSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name;
};

// on every save, add the date
userSchema.pre('save', (next) => {
  // get the current date
  let currentDate = new Date();

  // change the updated_at field to current date
  this.update_at = currentDate;

  // if created_at doesn't exist, add to that field
  !this.created_at ? this.created_at = currentDate;

  next();
})

//create a model using it
const Event = mongoose.model('Event', eventSchema);

// make this available to our users in our Node applications
module.exports = Event;
