#WeLoveMovies Backend Application
##This is the Back End API for the WeLoveMovies project. 

###Installation
Fork / clone this repository.
Run npm install.
Use npm start to run the application. If you deploy this application, create a .env.production file similar to the .env.development file.

###API ENDPOINTS/Routes
Using a database GUI like Postman, the following routes retrieve information from an ElephantSQL database I was tasked with setting up:

- GET /movies [returns all movies store in database]
  - /movies/:movieId 
    - GET /movies/:movieId [returns individual movie entry]
    - GET /movies/:movieId/theaters [returns theaters now showing individual movieId]
    - GET /movies/:movieId/reviews [returns reviews for individual movieId]
    
- GET /theaters [returns list of all theaters with movies they are now showing]
- /reviews
  - PATCH /reviews/:reviewId [updates an existing review record in database by specified id]
  - DELETE /reviews/:reviewId [deletes an existing review record from database]
  
TODO: 
- connect front end and deploy fullstack application 
- add full CRUD operations for theaters and reviews 
- update UI to personal taste 
