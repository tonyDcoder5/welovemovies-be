const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const movieRouter = require("./movie.router");

// nested route for individual movie details
router.use("/:movieId", movieRouter);

// GET all movies API route
router.route("/")
.get(controller.list)
.all(methodNotAllowed);


module.exports = router;
