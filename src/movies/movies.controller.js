const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next){
    const movie = await service.read(req.params.movieId);

    if (movie){
        res.locals.movie = movie;
        return next();
    }

    next({ status: 404, message: `Movie cannot be found.` });
} 

async function list(req, res, next) {
    
  const showStatus = req.query.is_showing;

  if(showStatus){
    return next()
  }

  const data = await service.list();
  res.json({ data });
}

async function nowShowing(req, res, next) {
    const data = await service.showStatusTrue();
    res.json({ data });
  }

async function read(req, res){
    res.json({ data: res.locals.movie })
  }

async function showTheaters(req, res, next){
    const theaters = await service.showTheaters(req.params.movieId);

    res.json({data: theaters});
}

async function showReviews(req, res, next){
    const reviews = await service.showReviews(req.params.movieId);

    res.json({data: reviews});
}

module.exports = {
  list: [asyncErrorBoundary(list), asyncErrorBoundary(nowShowing)],
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read), ],
  showTheaters: [asyncErrorBoundary(movieExists), asyncErrorBoundary(showTheaters)],
  showReviews: [asyncErrorBoundary(movieExists), asyncErrorBoundary(showReviews)],
};
