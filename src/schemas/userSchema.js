import Joi from "joi";

const signup = Joi.object({
  name: Joi.string()
    .required()
    .min(3),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required()
    .min(6),
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref('password')),
  type: Joi.string()
    .required()
    .valid('doctor', 'pacient')
});

const signin = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required(),
  type: Joi.string()
    .required()
    .valid('pacient', 'doctor')
});

export default {
  signup,
  signin
};