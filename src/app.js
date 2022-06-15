if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

// include cors for all routes
app.use(cors());
app.use(express.json());

// API endpoint routes
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

// error/outer case handler 
app.use(notFound);
app.use(errorHandler);

module.exports = app;
