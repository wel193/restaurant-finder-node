const dao = require('../db/user/user-dao')
const User = require('../db/user/user-model')
const passport = require('passport');

module.exports = (app) => {
  const findUser = (req, res) => {
    dao.findUser()
        .then(user => res.json(user))
  }
  const userRegister = (req, res) => {
    console.log(req.body);
    const {email, username, password} = req.body
    const newUser = new User({email, username});
    User.register(newUser, password)
    .then(status => {console.log("status", status); res.send(status)})
        .catch(e=>{console.log("error", e); res.sendStatus(403)})
  }

  const userLogin = (req, res) => {
    res.sendStatus(200);
  }

  app.get('/users', findUser)
  app.get('/register', (req,res) => res.render('users/register'))
  app.get('/login', (req, res)=>res.render('users/login'))
  app.post('/register', userRegister)
  app.post('/login', passport.authenticate('local'), userLogin)
}