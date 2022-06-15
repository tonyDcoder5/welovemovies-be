const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// helper function that runs a service request for an individual movieId and stores the movie entry into res.locals
async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }

  // if no movie is found return 404
  next({ status: 404, message: `Movie cannot be found.` });
}

// list method, returns a service request for a list of all movies (query param exists, move to nowShowing func)
async function list(req, res, next) {
  const showStatus = req.query.is_showing;

  if (showStatus) {
    return next();
  }

  const data = await service.list();
  res.json({ data });
}

// returns a service request for a list of movies with is_showing value set to true 
async function nowShowing(req, res, next) {
  const data = await service.showStatusTrue();
  res.json({ data });
}

// returns an individual movie's full details
async function read(req, res) {
  res.json({ data: res.locals.movie });
}

// returns a service request for a list of theaters showing an individual movie by movieId
async function showTheaters(req, res, next) {
  const theaters = await service.showTheaters(req.params.movieId);

  res.json({ data: theaters });
}

// returns a service request for a list of reviews for an individual movie by movieId
async function showReviews(req, res, next) {
  const reviews = await service.showReviews(req.params.movieId);

  res.json({ data: reviews });
}

module.exports = {
  list: [asyncErrorBoundary(list), asyncErrorBoundary(nowShowing)],
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  showTheaters: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(showTheaters),
  ],
  showReviews: [
    asyncErrorBoundary(movieExists),
    asyncErrorBoundary(showReviews),
  ],
};
