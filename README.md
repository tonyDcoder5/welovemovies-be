# WeLoveMovies Backend Application

## This is the Back End API for the WeLoveMovies project

### Installation  

Fork / clone this repository.   
Run npm install.   
Use npm start to run the application. If you deploy this application, create a .env.production file similar to the .env.development file.   

### Home Page 
Home page displays movies in database with a is_showing value set to true 
![Home Page](/assets/screenshots/home_page.png)

### API ENDPOINTS/Routes  
Using a database GUI like Postman, the following routes retrieve information from an ElephantSQL database I was tasked with setting up:
- GET /movies [returns all movies stored in database]
- ![GET all movies](/assets/screenshots/GET_movies_all.png)
- ![GET all movies2](/assets/screenshots/GET_movies_all_2.png)
  - /movies/:movieId 
    - GET /movies/:movieId [returns individual movie entry]
    - GET /movies/:movieId/theaters [returns theaters now showing individual movieId]
    - GET /movies/:movieId/reviews [returns reviews for individual movieId]
  - ![GET movie by id](/assets/screenshots/GET_movies_movieid.png)
  - ![GET movie by id2](/assets/screenshots/GET_movies_movieId_2.png)
    
- GET /theaters [returns list of all theaters with movies they are now showing]
- ![GET all theaters](/assets/screenshots/GET_theaters.png)

- /reviews
  - PATCH /reviews/:reviewId [updates an existing review record in database by specified id]
  - DELETE /reviews/:reviewId [deletes an existing review record from database]
  
TODO: 
- add full CRUD operations for theaters, movies, and reviews 
- update UI to personal taste 
- link to realtime API data for current movies and local theaters
