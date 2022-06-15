const router = require("express").Router({ mergeParams: true });
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// endpoints for individual review update and delete options for specific reviewId
router.route("/:reviewId")
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);


module.exports = router;
