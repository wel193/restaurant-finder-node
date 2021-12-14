const mongoose = require('mongoose');

const schema = mongoose.Schema({
    location_id: String,
    name: String,
    description: String,
    location_string: String,
    images: []
}, {collection: 'restaurants'});

module.exports = schema;
