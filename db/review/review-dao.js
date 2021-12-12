const model = require('./review-model');

const findAllReviews = () => model.find();

const createReview = (review) => model.create(review);

const deleteReview = (id) => model.deleteOne({_id: id});

const updateReview = (id, review) => model.updateOne({_id: id}, {$set: review});

module.exports = {
    findAllReviews,
    createReview,
    deleteReview,
    updateReview
};

