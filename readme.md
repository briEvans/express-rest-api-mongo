# IMPLEMENTATION NOTES ~~~

Here is my [WIP] implementation of an EXPRESS/REST/MONGO set up. The following features have been completed:
1. Use an ORM to interact with a simple database model 
  - The ORM of choice for this project was MONGOOSE. See models in api/models
  - The application is set up with a cloud mongo cluster from Mongo Atlas
  
2. Create a basic routing mechanism for HTTP requests
  In the folder api/routes/ the routes have been set up for handling books, users, and institutions
  
3. Respond to a request in a consistent and logical manner
 - completed requests: `users/create`, `users/{id}`, `books/create`. 
 - templated requests: `users/signup`
 
 # SET UP AND RUN
 `npm install`
 `npm start`
 
 
