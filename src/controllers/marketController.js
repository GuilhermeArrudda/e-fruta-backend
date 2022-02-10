import db from "../database.js"

async function getProducts(req, res) {
    try {
        
        const products = await db.collection("products").find({}).toArray();
        res.send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };
};

export {
    getProducts
};