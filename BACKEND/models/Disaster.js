var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DisasterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  rescuers: {
    type: Number,
    required: false,
    default: 0
  },
  occurred: {
    type: Date,
    required: false,
    default: Date.now
  },
  rescued: {
    type: Number,
    required: false,
    default: 0
  },
  deaths: {
    type: Number,
    required: false,
    default: 0
  },
  victims: {
    type: Number,
    required: false,
    default: 0
  }
});

module.exports = mongoose.model('Disaster', DisasterSchema);