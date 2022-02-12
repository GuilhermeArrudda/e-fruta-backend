import joi from "joi";

const createProduct = joi.object({
    name: joi.string().min(3).max(40).required(),
    price: joi.number().min(1).required(),
    stock: joi.number().min(0).required(),
    images: joi.array().min(1).items(joi.string().pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)),
});

export {
    createProduct
};