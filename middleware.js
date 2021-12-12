module.exports.isLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()){
    return "error"
  }
  next();
}