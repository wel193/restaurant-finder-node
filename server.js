const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./db/user/user-model');

const MONGODB_URI = 'mongodb+srv://rf-admin:cs5610@restaurant-finder.ivbrl.mongodb.net/restaurant-finder?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/restaurant-finder');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sessionConfig = {
  secret: "secretcode",
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    //secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //a week from now in millisecond
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}
app.use(session(sessionConfig));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/fakeuser', (req, res) => {
  const user = new User({email: 'fakeUser@gmail.com', username: 'fakeUser'});
  const newUser = User.register(user, 'ffaakkee');
  res.send(newUser)
})

// services
require('./services/review-service')(app);
require('./services/restaurant-service')(app);

app.listen(process.env.PORT || 4000);