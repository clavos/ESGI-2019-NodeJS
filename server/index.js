const express = require('express');
const MovieRoute = require('./routes/movie');
const UserRoute = require('./routes/user');
const ActorRoute = require('./routes/actor');
const ReviewRoute = require('./routes/review');
var bodyParser = require('body-parser');

const verifyToken = require('./middlewares/security');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(verifyToken);
app.use('/movies', MovieRoute);
app.use('/users', UserRoute);
app.use('/actors', ActorRoute);
app.use('/reviews', ReviewRoute);

app.listen(3001, () => console.log('Listening'));