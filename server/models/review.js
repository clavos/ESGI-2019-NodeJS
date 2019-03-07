const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    Comment: String,
    score: { type: Number, min: 0, max: 5 }
});

module.exports = db.model("review", reviewSchema);