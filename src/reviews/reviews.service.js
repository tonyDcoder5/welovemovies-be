const knex = require("../db/connection");


// helper function that retrieves individual critic record from critic table by criticID
function getCriticById(critic_id){
  return knex("critics").select("*").where({critic_id}).first();
}

// method that returns individual review record from reviews data by reviewId
function read(review_id){
    return knex("reviews").select("*").where({ review_id }).first();
}

// method that updates and returns individual review record from reviews data
function update(updatedReview) {
    return knex("reviews")
      .select("*")
      .where({ review_id: updatedReview.review_id })
      .update(updatedReview, "*");
  }

// method that deletes an individual review by reviewId from reviews data
function destroy(review_id) {
    return knex("reviews").where({ review_id }).del();
  }

module.exports = {
    read,
    update,
    delete: destroy,
    getCriticById,
}