const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const actorSchema = new Schema({
    firstname: String,
    lastname: String
});

module.exports = db.model("actor", actorSchema);