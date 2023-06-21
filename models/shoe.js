const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  brand: {
    type: String,
  },
  size: {
    type: Number
  },
  color: {
    type: String,
    enum: ['red', 'blue', 'green']
  }
});

module.exports = mongoose.model('Shoe', shoeSchema);