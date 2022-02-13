import joi from 'joi';

const singUpSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg|svg))/i),
    email: joi.string().email().required(),
    password: joi.string().required()
});

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export {
    singUpSchema,
    loginSchema
};