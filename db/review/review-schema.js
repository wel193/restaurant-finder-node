const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user: {
        _id: String,
        userName: String,
        avatarIcon: String
    },
    restaurant: {
        _id: String,
        restaurantName: String,
    },
    content: String,
    rating: Number,
    date: String
}, {collection: 'reviews'});

module.exports = schema;