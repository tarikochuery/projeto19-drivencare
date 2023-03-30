import { Router } from "express";
import userController from "../controllers/userController.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import userSchema from "../schemas/userSchema.js";

const userRoutes = Router();

userRoutes.post('/signup', schemaValidation(userSchema.signup), userController.create);
// userRoutes.post('/signin', schemaValidation(userSchema.signin), userController.login);
// userRoutes.get('/appointment', appointmentController.getUser);
// userRoutes.post('/appointment', schemaValidation(appointmentSchema.user), appointmentController.createUser);
// userRoutes.get('/appointment/history', appointmentController.getHistory);

export default userRoutes;