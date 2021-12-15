const model = require('./restaurant-model');

const findRestaurantsByName = (name) => model.find({name: name});

const findRestaurantsByCity = (city) => model.find({city: city});

const findRestaurantById = (id) => model.findOne({location_id: id});

const postRestaurant = (info) => model.create(info)

module.exports = {
    findRestaurantsByName,
    findRestaurantsByCity,
    findRestaurantById,
    postRestaurant
};
