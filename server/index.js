const express = require('express');
const MovieRoute = require('./routes/movie');

const app = express();

app.use('/movies', MovieRoute);

app.listen(3000, () => console.log('Listening'));