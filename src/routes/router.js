import { Router } from "express";
import { authRouter } from "./authRoute.js";
import { marketRouter } from "./marketRoute.js";

const router = Router();

router.use(authRouter);
router.use(marketRouter)

export {
    router
};