import { Router } from "express";
import { getProducts, postProducts} from "../controllers/marketController.js";
import { validateCreateProductMiddleware } from "../middlewares/validateCreateProductMiddleware.js"
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const marketRouter = Router();

marketRouter.get("/products", getProducts);
marketRouter.post("/products",validateCreateProductMiddleware, postProducts);

export {
    marketRouter
};