const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function reviewExists(req, res, next) {
    const review = await service.read(Number(req.params.reviewId));
  
    if (review) {
      res.locals.review = review;
      return next();
    }
    next({ status: 404, message: `Review cannot be found for.` });
  }

async function update(req, res) {
    const editReview = {
      ...res.locals.review,
      ...req.body.data,
    };
  
    await service.update(editReview);
    const updateReview = await service.read(editReview.review_id);
    updateReview.critic = await service.getCriticById(editReview.critic_id);
    res.json({ data: updateReview });
  }
  
  async function destroy(req, res) {
    await service.delete(res.locals.review.review_id);
    res.sendStatus(204);
  }
  

module.exports = {
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update), ],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy), ],
}