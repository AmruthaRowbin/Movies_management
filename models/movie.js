const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  genres: [{ type: String }],
  watchedUsers: [{ type: String }]
});

module.exports = mongoose.model('Movie', movieSchema)
