require('dotenv').config();

const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , session = require('express-session')
    , ctrl = require('./controller');

const app = express();

const checkForSessions = require('./middleware/checkForSessions');
//const checkForAuth = require('./middleware/checkForAuth');

app.use( bodyParser.json() );
app.use( cors() );


// AUTHORIZATION ENDPOINTS


app.post('/api/auth/login', ctrl.login);
app.post('/api/auth/register', ctrl.reg);
app.get('/api/auth/logout', ctrl.logout);


// PROPERTIES ENDPOINTS

app.get('/api/properties', ctrl.read);
app.post('/api/properties', ctrl.create);
app.delete('/api/properties/:id', ctrl.delete);


const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET
} = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkForSessions);




app.listen(SERVER_PORT, () => {
  console.log('Listening on port:', SERVER_PORT)
});


massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log('Database is connected');
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.log(err);
    app.set('db', dbInstance);
  })