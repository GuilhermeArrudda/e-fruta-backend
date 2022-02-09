import { singUpSchema } from "../schemas/authSchema.js";

function validateSignUpSchemaMiddleware(req, res, next){
    const user = req.body;
    const validation = singUpSchema.validate(user);

    if(validation.error) {
        return res.sendStatus(422);
    };
    next();
};

export {
    validateSignUpSchemaMiddleware
};