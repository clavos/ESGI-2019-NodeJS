const mongoose = require('mongoose');
const db = require('../libs/db');
const review = require('./review')

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: String,
    description: String,
    year: {type: Number, min: 1850},
    releaseDate: Date//,
    //reviews: [review]
});

module.exports = db.model("movie", movieSchema);