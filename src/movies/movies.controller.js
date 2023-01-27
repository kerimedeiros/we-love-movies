const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function movieExists(req, res, next) {
  moviesService.read(req.params.movieId).then((movie) => {
    if (movie) {
      res.locals.movie = movie;
      return next();
    }
    next({ status: 404, message: `Movie cannot be found.` });
  });
}

async function list(req, res) {
  let data = {};
  const showing = req.query.is_showing;
  if (!showing) {
    data = await moviesService.list();
  } else {
    data = await moviesService.listIfShowing();
  }

  res.json({ data });
}

function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

module.exports = {
  list,
  read: [asyncErrorBoundary(movieExists), read],
};
