const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String
});

module.exports = db.model("User", userSchema);