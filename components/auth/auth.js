const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

//Importing Schemas
const User = require('../users/userSchema')
const userSchemaJoi = require('../users/userSchemaJoi')

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
 *       confirmPassword:
 *         type: string
 */

 /**
  * @swagger
  * /auth/signup:
  *   post:
  *     tags:
  *       - Auth
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
 router.post('/signup', (req, res, next) => {        //register a new user
   const result = Joi.validate({     //validate request with joi
     email: req.body.email,
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     personal_phone: req.body.personal_phone,
     password: req.body.password,
     confirmPassword: req.body.confirmPassword,
 }, userSchemaJoi, (err, result) => {
     if (err) {         //if the request is invalid return an error
       res.status(500).json({
         error: err
       });
     } else {       //if the request is valid the existance of the email is checked
       User.find({ email: req.body.email })
       .exec()
       .then(user => {
         if (user.length >= 1) {
           return res.status(409).json({
             message: "Email already exists"
           });
         } else if (req.body.password !== req.body.confirmPassword) {   //check if the passwords match
              return res.status(409).json({
                message: "Passwords must match"
              });
            }
           else {      //if the request is valid the password is hashed
           bcrypt.hash(req.body.password, 10, (err, hash) => {
             if (err) {
               return res.status(500).json({
                 error: err
               });
             } else {   //if the password is successfully hashed, create a new user
               const user = new User({
                 _id: new mongoose.Types.ObjectId(),
                 email: req.body.email,
                 first_name: req.body.first_name,
                 last_name: req.body.last_name,
                 personal_phone: req.body.personal_phone,
                 password: hash
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
           })
         }
       });
     }
   });
 });

 /**
  * @swagger
  * /auth/login:
  *   post:
  *     tags:
  *       - Auth
  *     description: Login
  *     produces:
  *       - application/json
  *     parameters:
  *       - in: body
  *         name: login
  *         description: login
  *         schema:
  *          type: object
  *          required: true
  *          properties:
  *            email:
  *              type: string
  *            password:
  *              type: string
  *     responses:
  *       200:
  *         description: Successfully logged in
  */
  router.post("/login", (req, res, next) => {
    User.find({ email: req.body.email })      //find if the email is registered
      .exec()
      .then(user => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "User not registered"
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {    //if the user is found the passwords are compared
          if (err) {
            return res.status(401).json({
              message: err
            });
          }
          if (result) {
            return res.status(200).json({
              message: "Login successful",
              id: user[0]._id,
            });
          }
          res.status(401).json({
            message: "Incorrect password"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  })

module.exports = router;
