const dao = require('../db/restaurant/restaurant-dao');

module.exports = (app) => {
    // const findRestaurantsByName = (req, res) =>
    //     dao.findRestaurantsByName(req.params.name)
    //         .then(restaurants => res.json(restaurants));
    //
    // const findRestaurantsByCity = (req, res) =>
    //     dao.findRestaurantsByCity(req.params.city)
    //         .then(restaurants => res.json(restaurants));

    const findRestaurantById = (req, res) =>
        dao.findRestaurantById(req.params.id)
            .then(restaurants => res.json(restaurants));

    // app.get('/api/restaurants/:name', findRestaurantsByName);
    // app.get('/api/restaurants/:city', findRestaurantsByCity);
    app.get('/api/restaurants/:id', findRestaurantById);
}