const dao = require('../db/user/user-dao')
const User = require('../db/user/user-model')

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

  app.get('/register', findUser)
  app.post('/register', userRegister)
}