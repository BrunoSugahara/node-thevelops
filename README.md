<h1>Node API for theVelops project</h1>
Node and express API that performs CRUD

Getting Started
Download the project and use the terminal to navigate to the designated folder. Type "npm start" to start the server on nodemon and visit http://localhost:3000/api-docs/ to see swagger's documentation.

Available methods:
get: http://localhost:3000/users
post: http://localhost:3000/users
 Example: {
  "email": "example@gmail.com",
  "first_name": "example",
  "last_name": "example",
  "personal_phone": "9999999",
  "password": "123",
}
get {id}: http://localhost:3000/users/{id}
put {id}: http://localhost:3000/users/{id}
delete {id}: http://localhost:3000/users/{id}

Database
The database being used is mongodb Atlas

Author
Bruno Sugahara
