import { Router } from "express";
import { getProducts } from "../controllers/marketController.js";

const marketRouter = Router();

marketRouter.get("/products", getProducts);

export {
    marketRouter
};