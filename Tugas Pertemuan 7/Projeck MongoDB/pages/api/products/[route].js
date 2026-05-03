import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("ecommerce");
    const { route } = req.query;

    if (req.method === "GET") {
        try {
            // Example of getting a specific product by ID
            // Assuming route is the ObjectId of the product
            const product = await db.collection("products").findOne({ _id: new ObjectId(route) });
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === "PUT") {
        try {
            const data = req.body;
            const result = await db.collection("products").updateOne(
                { _id: new ObjectId(route) },
                { $set: data }
            );
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === "DELETE") {
        try {
            const result = await db.collection("products").deleteOne({ _id: new ObjectId(route) });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
