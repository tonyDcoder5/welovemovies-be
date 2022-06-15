const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// helper function that runs a service request to retrieve an individual reviewId from data and stores the review entry into res.locals
async function reviewExists(req, res, next) {
    const review = await service.read(Number(req.params.reviewId));
  
    if (review) {
      res.locals.review = review;
      return next();
    }

    // if no review is found return 404
    next({ status: 404, message: `Review cannot be found for.` });
  }


// update method, creates a new review object using request data and updates database using the created object
async function update(req, res) {
    const editReview = {
      ...res.locals.review,
      ...req.body.data,
    };
  
    await service.update(editReview);

    // then store newly updated entry into a variable to add critic information to and send as response 
    const updateReview = await service.read(editReview.review_id);
    updateReview.critic = await service.getCriticById(editReview.critic_id);
    res.json({ data: updateReview });
  }

  // delete method will find and delete the specified review by reviewId from the database 
  async function destroy(req, res) {
    await service.delete(res.locals.review.review_id);
    res.sendStatus(204);
  }
  

module.exports = {
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update), ],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy), ],
}