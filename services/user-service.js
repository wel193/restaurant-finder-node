const dao = require('../db/user/user-dao')
const User = require('../db/user/user-model')
const passport = require('passport');
const {isLoggedIn} = require('../middleware');

module.exports = (app) => {
  const findUser = (req, res) => {
    dao.findUser()
        .then(user => res.json(user))
  }
  const userRegister = (req, res) => {
    console.log(req.body);
    const {email, username, password, role} = req.body;
    const newUser = new User({email, username});
    User.register(newUser, password)
    .then(status => {console.log("status", status); res.send(status)})
        .catch(e=>{console.log("error", e); res.sendStatus(403)})
  }

  const userLogin = (req, res) => {
    console.log("in user Login", req.user)
    res.json(req.user)
  }


  const doSomething = (req, res) =>{
    console.log("in doSomething", req.user);
    res.send(res.status)
  }

  app.post('/login',  passport.authenticate("local"), userLogin)
  // app.post('/login', userLogin2)
  app.get('/user', doSomething)
  app.get('/users', findUser)
  app.get('/register', (req,res) => res.render('users/register'))
  app.get('/login', (req, res)=>res.render('users/login'))
  app.post('/register', userRegister)
}