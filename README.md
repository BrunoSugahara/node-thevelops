<h1>Node API for theVelops project</h1>
Node and express API that performs CRUD

<h2>Getting Started</h2>
Download the project and use the terminal to navigate to the designated folder. Type "npm start" to start the server on nodemon and visit http://localhost:3000/api-docs/ to see swagger's documentation.

<h2>Available methods:</h2>
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

<h2>Database</h2>
The database being used is mongodb Atlas

<h2>Author</h2>
Bruno Sugahara
