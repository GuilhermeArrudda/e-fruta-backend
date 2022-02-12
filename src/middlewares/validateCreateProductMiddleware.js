import { createProduct } from "../schemas/createProductsSchema.js";

async function validateCreateProductMiddleware(req, res, next) {
    const validation = createProduct.validate(req.body);
    if(validation.error) {
        res.status(422).send("dados inválidos")
        return;
    };
    next();
};

export {
    validateCreateProductMiddleware
};