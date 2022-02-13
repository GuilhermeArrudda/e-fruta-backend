import db from "../database.js";

export async function validateTokenMiddleware(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace('Bearer', '');

    if (!token) return res.sendStatus(401);

    try {

        const session = await db.collection('sessions').findOne({ "token": token })

        if (!session) {
        return res.sendStatus(401);
        }

        const user = await db.collection("users").findOne({
        _id: session.user.userId
        })

        if (!user) {
        return res.sendStatus(401);
        }

        res.locals.user = user;

        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };
};