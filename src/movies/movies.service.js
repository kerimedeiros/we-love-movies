const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}

function listIfShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .groupBy("m.movie_id")
    .where({ is_showing: true });
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

module.exports = {
  list,
  listIfShowing,
  read,
};
