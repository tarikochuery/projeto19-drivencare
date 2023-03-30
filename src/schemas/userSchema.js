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

export default {
  signup
};