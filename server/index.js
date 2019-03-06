const express = require('express');
const MovieRoute = require('./routes/movie');
const verifyToken = require('./middlewares/security');

const app = express();

app.use(verifyToken);
app.use('/movies', MovieRoute);

app.listen(3000, () => console.log('Listening'));