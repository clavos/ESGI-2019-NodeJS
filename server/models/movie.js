const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: String,
    description: String,
    year: {type: Number, min: 1850},
    releaseDate: Date
});

module.exports = db.model("movie", movieSchema);