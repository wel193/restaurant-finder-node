const model = require('./user-model');
const userRegister = (info) => model.create(info);
const findUser = () => model.find();

module.exports = {
  userRegister, findUser
};