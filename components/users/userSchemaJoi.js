const Joi = require('joi');

//Joi user schema
const userSchema = Joi.object().keys({
 _id: Joi.string().alphanum(),
 email: Joi.string().email().required(),
 first_name: Joi.string().required(),
 last_name: Joi.string().required(),
 personal_phone: Joi.number().integer().required(),
});

module.exports = userSchema;
