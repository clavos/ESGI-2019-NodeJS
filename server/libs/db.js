const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.on('open', () => console.log("Connected"));

module.exports = db;