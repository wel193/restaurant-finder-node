const model = require('./restaurant-model');

const findRestaurantsByName = (name) => model.find({restaurantName: name});

const findRestaurantsByCity = (city) => model.find({city: city});

const findRestaurantById = (id) => model.findById(id);

module.exports = {
    findRestaurantsByName,
    findRestaurantsByCity,
    findRestaurantById
};
