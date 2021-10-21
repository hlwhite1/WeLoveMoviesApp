/* eslint-disable strict */

function directory(req, res, next) {
  next({
    status: 404,
    message: `No content for /.  Try /movies, /movies/:movieId, /movies/:movieId/reviews, /movies/:movieId/theaters, theaters`,
  });
}

module.exports = directory;
