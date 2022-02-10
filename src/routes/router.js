import { Router } from "express";
import { authRouter } from "./authRoute.js";
import { loginRouter } from "./loginRoute.js";

const router = Router();

router.use(authRouter);
router.use(loginRouter);

export {
    router
};