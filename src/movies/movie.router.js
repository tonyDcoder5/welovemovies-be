const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
.get(controller.read)
.all(methodNotAllowed);

router.route("/theaters")
.get(controller.showTheaters)
.all(methodNotAllowed);

router.route("/reviews")
.get(controller.showReviews)
.all(methodNotAllowed);

module.exports = router;
