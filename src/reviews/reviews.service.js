const knex = require("../db/connection");

function getCriticById(critic_id){
  return knex("critics").select("*").where({critic_id}).first();
}

function read(review_id){
    return knex("reviews").select("*").where({ review_id }).first();
}

function update(updatedReview) {
    return knex("reviews")
      .select("*")
      .where({ review_id: updatedReview.review_id })
      .update(updatedReview, "*");
  }

function destroy(review_id) {
    return knex("reviews").where({ review_id }).del();
  }

module.exports = {
    read,
    update,
    delete: destroy,
    getCriticById,
}