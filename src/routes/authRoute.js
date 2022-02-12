import { Router } from "express";
import { postSignUp, signOut } from "../controllers/authController.js";
import { postLogin } from "../controllers/authController.js";
import { validateSignUpSchemaMiddleware } from "../middlewares/validateAuthSchemaMiddleware.js";
import { validateLoginSchema } from "../middlewares/validateAuthSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const authRouter = Router();
const loginRouter = Router();

authRouter.post('/sign-up', validateSignUpSchemaMiddleware, postSignUp);
authRouter.delete('sign-out', validateTokenMiddleware, signOut);
loginRouter.post('/login', validateLoginSchema, postLogin);

export{
    authRouter,
    loginRouter
};