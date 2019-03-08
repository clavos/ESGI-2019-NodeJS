const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    User: {type: Schema.ObjectId, ref: 'users'},
    Comment: String,
    score: { type: Number, min: 0, max: 5 }
});

module.exports = reviewSchema;