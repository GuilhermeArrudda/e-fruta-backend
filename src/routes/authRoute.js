import { Router } from "express";
import { postSignUp, signOut } from "../controllers/authController.js";
import { postLogin } from "../controllers/authController.js";
import { validateSignUpSchemaMiddleware } from "../middlewares/validateAuthSchemaMiddleware.js";
import { validateLoginSchema } from "../middlewares/validateAuthSchemaMiddleware.js";

const authRouter = Router();
const loginRouter = Router();

authRouter.post('/sign-up', validateSignUpSchemaMiddleware, postSignUp);
loginRouter.post('/login', validateLoginSchema, postLogin);

export{
    authRouter,
    loginRouter
};