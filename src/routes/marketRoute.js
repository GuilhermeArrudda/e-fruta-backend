import { Router } from "express";
import { getProducts, postProducts, postCart, getCart } from "../controllers/marketController.js";
import { validateCreateProductMiddleware } from "../middlewares/validateCreateProductMiddleware.js"
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";

const marketRouter = Router();

marketRouter.get("/products", getProducts);
marketRouter.post("/products",validateCreateProductMiddleware, postProducts);
marketRouter.post("/cart",validateTokenMiddleware, postCart);
marketRouter.get("/cart", getCart)

export {
    marketRouter
};