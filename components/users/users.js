const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

//Importing Schemas
const User = require('./userSchema')
const userSchemaJoi = require('./userSchemaJoi')
//const Login = require('./userSchema')


//usersRoutes

/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       email:
 *         type: string
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 *       personal_phone:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/', (req, res, next) => {           //get all users
  User.find()
    .exec()
    .then(docs => {
      res.status(200).json({docs});
    });
});

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user information
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/users'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', (req, res, next) => {        //post a new user
  const result = Joi.validate({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    personal_phone: req.body.personal_phone,
}, userSchemaJoi, (err, result) => {
    if (err) {
      res.status(500).json({
        error: err
      });
    }
    else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        personal_phone: req.body.personal_phone,
      });
      user
        .save()
        .then(result => {
          console.log(result)
          res.status(200).json({
             createdUser : result
             });
         });
    }
  });
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.get('/:userId', (req, res, next) => {      //get a specific user
  const id = req.params.userId;
  User.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    });
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         schema:
 *           $ref: '#/definitions/users'
 *       - name: update
 *         description: update user's info
 *         in: body
 *         schema:
 *           $ref: '#/definitions/users'
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/users'
 */
router.put('/:userId', (req, res, next) => {          //update a specific user
  User.findByIdAndUpdate({ _id: req.params.userId}, req.body, {new: true})
    .then( result => {
      res.status(200).json({
        message: 'User ' + req.params.userId + ' updated',
        result
      });
    });
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: user's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/:userId', (req, res, next) => {         //delete a specific user
  User.findByIdAndRemove( {_id: req.params.userId})
    .then( result => {
      res.status(200).json({
        message: 'User ' + req.params.userId + ' deleted',
        result
      });
    })
});



module.exports = router;
