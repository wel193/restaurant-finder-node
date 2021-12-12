const dao = require('../db/review/review-dao');

module.exports = (app) => {
    const findAllReviews = (req, res) =>
        dao.findAllReviews()
            .then(reviews => res.json(reviews));

    const createReview = (req, res) =>
        dao.createReview(req.body)
            .then(insertedReview => res.json(insertedReview));

    app.get('/api/reviews', findAllReviews);
    app.post('/api/reviews', createReview);
    // app.delete('/api/reviews/:id', deleteReview);
    // app.put('/api/reviews/:id', updateReview);

}