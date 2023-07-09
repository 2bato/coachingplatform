const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  movement: {
    type: String,
    required: true,
  },
  scheme: {
    type: String,
    required: true,
  },
  rpe: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  day: {
    type: Number,
    required: true,
  },
  $visualize: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: String,
  },
});

module.exports = Exercise = mongoose.model('Exercise', ExerciseSchema);
