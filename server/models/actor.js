const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const actorSchema = new Schema({
    firstName: String,
    lastName: String
});

module.exports = db.model("actor", actorSchema);