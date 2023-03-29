import { Router } from "express";
import doctorRoutes from "./doctorRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/doctor', doctorRoutes);


export default routes;