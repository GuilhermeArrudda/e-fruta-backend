import { Router } from "express";
import { getProducts, postProducts } from "../controllers/marketController.js";

const marketRouter = Router();

marketRouter.get("/products", getProducts);
marketRouter.post("products", postProducts);

export {
    marketRouter
};