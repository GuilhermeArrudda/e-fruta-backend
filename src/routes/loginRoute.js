import { Router } from "express";
import { postLogin } from "../controllers/authController.js";
import { validateLoginSchema } from "../middlewares/validateLoginSchema.js";

const loginRouter = Router();

loginRouter.post('/login', validateLoginSchema, postLogin);

export{
    loginRouter
};