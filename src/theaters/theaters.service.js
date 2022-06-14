const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

const reduceMovies = reduceProperties("theater_id", {
    "title": ["movies", null, "title"],
    "rating": ["movies", null, "rating"],
    "runtime_in_minutes": ["movies", null, "runtime_in_minutes"]
  });

function list() {
    return knex("theaters as t")
    .join("movies_theaters as mt", "mt.theater_id", "t.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "m.title", "m.rating", "m.runtime_in_minutes")
    .where("mt.is_showing", true)
    .andWhere(knex.raw("m.movie_id = mt.movie_id"))
    .andWhere(knex.raw("mt.theater_id = t.theater_id"))
    .groupBy("mt.is_showing", "t.theater_id", "m.movie_id")
    .then((data) => reduceMovies(data));
}

module.exports = {
  list,
};
