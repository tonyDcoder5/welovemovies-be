const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const movieRouter = require("./movie.router");


router.use("/:movieId", movieRouter);

router.route("/")
.get(controller.list)
.all(methodNotAllowed);


module.exports = router;
