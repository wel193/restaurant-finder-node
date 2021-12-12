const mongoose = require('mongoose');

const schema = mongoose.Schema({
    restaurantName: String,
    description: String,
    hours: String,
    address: String,
    city: String,
    phone: String,
    website: String,
    images: []
}, {collection: 'restaurants'});

module.exports = schema;
