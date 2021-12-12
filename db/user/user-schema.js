const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const schema = mongoose.Schema({
  email: {
    type:String,
    required: true,
    unique: true
  }

}, {collections: "users"});
schema.plugin(passportLocalMongoose);
module.exports = schema;