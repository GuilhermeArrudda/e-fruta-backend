import { Router } from "express";
import { getProducts, postProducts, postCart } from "../controllers/marketController.js";

const marketRouter = Router();

marketRouter.get("/products", getProducts);
marketRouter.post("/products", postProducts);
marketCart.post("/cart", postCart)

export {
    marketRouter
};