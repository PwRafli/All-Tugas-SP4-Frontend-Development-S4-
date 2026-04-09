import dbPromise, { initDB } from "@/lib/db";

export async function GET() {
    await initDB();
    const db = await dbPromise;

    const cart = await db.all(`
    SELECT cart.id, rooms.Hotel_name, rooms.price, rooms.photo, cart.qty
    FROM cart
    JOIN rooms ON cart.room_id = rooms.id
  `);

    return Response.json(cart);
}

export async function POST(req) {
    await initDB();
    const db = await dbPromise;

    const { room_id, qty } = await req.json();

    await db.run(
        "INSERT INTO cart (room_id, qty) VALUES (?, ?)",
        [room_id, qty]
    );

    return Response.json({ message: "Masuk ke Checkout" });
}

export async function DELETE(req) {
    await initDB();
    const db = await dbPromise;

    const { id } = await req.json();

    await db.run("DELETE FROM cart WHERE id = ?", [id]);

    return Response.json({ message: "Berhasil dihapus dari checkout" });
}