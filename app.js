const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc'); //For swagger documentation
const path = require('path');

const app = express();

//body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

//browser header configuration
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Describe a RESTful API with Swagger',
  },
  host: 'localhost:3001',
  basePath: '/',
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./components/users/users.js', './components/auth/auth.js'],// pass all in array
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
const authRoutes = require('./components/auth/auth');
app.use('/auth', authRoutes);


//Connect to MongoDB
mongoose.connect('mongodb+srv://thevelops:thevelops@thevelops-o6fyn.mongodb.net/test?retryWrites=true');

module.exports = app;
