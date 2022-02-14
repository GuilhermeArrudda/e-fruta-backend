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

async function postProducts(req, res) {
    const { name, price, stock, image } = req.body;

    try {
        
        await db.collection('products').insertOne({ name, price, stock, image });

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
};

export {
    getProducts,
    postProducts
};