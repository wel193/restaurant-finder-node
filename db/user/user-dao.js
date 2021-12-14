const model = require('./user-model');
const userRegister = (info) => model.create(info);
const findUser = () => model.find();
const updateRole = (username, role) => model.findOneAndUpdate({username: username}, {role: role});


module.exports = {
  userRegister, findUser, updateRole
};