import { Router } from "express";
import { authRouter } from "./authRoute.js";
import { loginRouter } from "./authRoute.js";
const router = Router();

router.use(authRouter);
router.use(loginRouter);

export {
    router
};