# WeLoveMovies | Application Server
  This project is a backend API that was built using RESTful architecture to handle HTTP requests from a front end client application (the [WeLoveMovies application](https://github.com/kerimedeiros/we-love-movies-client)). The server allows users to search for movies, theaters, and reviews from the frontend application and provides update & delete capabilities for admin users. 

## Deployed Application
Server deployed here: https://we-love-movies-server-enwl.onrender.com/movies

Client Application (designed by Thinkful) deployed here: https://we-love-movies-front-end-vvvk.onrender.com/
## Technology Used
* JavaScript
* Node.js
* Express
* CORS
* PostgreSQL
* Knex.js


## Backend API

### Routes

The API allows for the following routes:

Method | Route | Description
 -|-|-
| `GET` | `/movies` | Lists all movies.
| `GET` | `/movies/:movieId` | Reads a specific movie by `movie_id`.
| `GET` | `/movies/:movieId/theaters` | Lists all theaters that are playing a specific movie.
| `GET` | `/movies/:movieId/reviews` | Lists all reviews for a specific movie.
| `GET` | `/theaters` | Lists all theaters.
| `GET` | `/reviews` | Lists all reviews.
| `PUT` | `/reviews/:reviewId` | Updates a specific review by `review_id`.
| `DELETE` | `/reviews/:reviewId` | Deletes a specific review by `review_id`.

All GET requests return a JSON response. PUT request requires application/json body, and returns a JSON response. 

## Installation
### Server

1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm start` to start the server locally.  

### Client Application

1. Go to the Thinkful [starter code repository on GitHub](https://github.com/kerimedeiros/we-love-movies-client).
2. Fork and clone the repository.
3. Run `npm install` to install project dependencies.
4. Run `npm start' to start the client app locally.

## Project Reflection

This is a capstone project I completed as part of Thinkful's Software Engineering certification program. This project was designed to test my ability to build complex servers and access data through a database by peforming the following project tasks: 

* Install and use common middleware packages
* Receive requests through routes
* Run tests from the command line
* Access relevant information through route and query parameters
* Create an error handler for the case where a route doesn't exist
* Build an API following RESTful design principles
* Create and customize a knexfile.js file
* Create a connection to a database using Knex
* Write database queries to complete CRUD routes in an Express server
* Return joined and nested data with Knex
* Write database migrations using Knex's migration tool
* Deploy a backend server to a cloud service