import { Router } from "express";
import { postSignUp } from "../controllers/authController.js";
import { validateSignUpSchemaMiddleware } from "../middlewares/validateAuthSchemaMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-up', validateSignUpSchemaMiddleware, postSignUp);

export{
    authRouter
};