const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', {
    dbName: "SampleCollections",
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.on('open', () => console.log("Connected"));

module.exports = db;