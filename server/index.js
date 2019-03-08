const express = require('express');
const MovieRoute = require('./routes/movie');
const UserRoute = require('./routes/user');
const actorRoute = require('./routes/actor');
var bodyParser = require('body-parser');

const verifyToken = require('./middlewares/security');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
//app.use(verifyToken);
app.use('/movies', MovieRoute);
app.use('/user', UserRoute);
app.use('/actor', actorRoute);


app.listen(3001, () => console.log('Listening'));