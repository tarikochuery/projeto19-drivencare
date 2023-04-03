import Joi from "joi";

const user = Joi.object({
  doctorId: Joi.number()
    .required()
    .positive(),
  date: Joi.date()
    .required(),
});

export default {
  user
};