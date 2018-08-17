const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc'); //For swagger documentation
var path = require('path');

const app = express();

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Describe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./components/users/users.js'],// pass all in array
  };
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

//Initialize routes
const usersRoutes = require('./components/users/users');
app.use('/users', usersRoutes);

//Connect to MongoDB
mongoose.connect('mongodb+srv://thevelops:thevelops@thevelops-o6fyn.mongodb.net/test?retryWrites=true');

module.exports = app;
