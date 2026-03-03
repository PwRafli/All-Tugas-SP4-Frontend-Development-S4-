import db from "@/lib/db";

export async function GET() {

    const products = db.prepare("SELECT * FROM products").all();

    return Response.json(products);

}