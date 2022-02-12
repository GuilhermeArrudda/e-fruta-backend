import db from "../database";

export async function validateTokenMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer', '');

    try {
        
        const session = await db.collection('session').findOne({ token });
        if(!session) {
            return res.sendStatus(401);
        };

        next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    };
};