<h1>Node API and React client for theVelops project</h1>
Node and express API that performs CRUD with a react front end

<h2>Getting Started</h2>
Download the project and use the terminal to navigate to the node-thevelops folder. Type "npm run dev" to start the API and the client simultaneously and visit http://localhost:3001/api-docs/ to see swagger's documentation.

<h2>Available methods:</h2><br />
get: http://localhost:3001/users <br />
post: http://localhost:3001/users <br />
 Example post: { <br />
  "email": "example@gmail.com", <br />
  "first_name": "example", <br />
  "last_name": "example", <br />
  "personal_phone": "9999999", <br />
  "password": "123", <br />
} <br />
get {id}: http://localhost:3001/users/{id} <br />
put {id}: http://localhost:3001/users/{id} <br />
delete {id}: http://localhost:3001/users/{id} <br />

<h4>New Authentication methods</h4>
post (register) : http://localhost:3001/auth/signup <br />
post (login) : http://localhost:3001/auth/login <br />

<h2>Client Features</h2>
The client can send requests to the API and the responses can be seen at the console  <br />
The following pages are available:  <br />
Login : http://localhost:3000/ <br />
Sign Up : http://localhost:3000/signup  <br />
Get User : http://localhost:3000/getUser <br />
Edit User : http://localhost:3000/editUser <br />
Edit Password : http://localhost:3000/editPassword <br />

<h2>Database</h2>
The database being used is mongodb Atlas

<h2>Author</h2>
Bruno Sugahara
