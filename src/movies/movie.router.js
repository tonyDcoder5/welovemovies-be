const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");


// GET individual movie by movieId
router.route("/")
.get(controller.read)
.all(methodNotAllowed);

// GET theaters showing individual movie by movieId
router.route("/theaters")
.get(controller.showTheaters)
.all(methodNotAllowed);

// GET reviews for an individual movie by movieId 
router.route("/reviews")
.get(controller.showReviews)
.all(methodNotAllowed);

module.exports = router;
