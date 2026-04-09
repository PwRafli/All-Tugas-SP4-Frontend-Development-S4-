import dbPromise, { initDB } from "@/lib/db";

export async function GET() {
    const db = await initDB();

    const rooms = await db.all("SELECT * FROM rooms");

    return Response.json(rooms);
}

export async function POST(req) {
    const db = await initDB();

    const { photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available } = await req.json();

    await db.run(
        "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available]
    );

    return Response.json({ message: "Hotel room added successfully" });
}
