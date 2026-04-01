import { connect } from "../db";

// GET semua data
export async function GET() {
    const db = await connect();
    const rooms = await db.all("SELECT * FROM room");
    return Response.json(rooms);
}

// POST tambah data
export async function POST(req) {
    try {
        const body = await req.json();
        const db = await connect();

        await db.run(
            `INSERT INTO room 
      (photo, code_room, name, description, room_size, price, guests, available)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                body.photo,
                body.code_room,
                body.name,
                body.description,
                body.room_size,
                body.price,
                body.guests,
                body.available,
            ]
        );

        return Response.json({ message: "Room berhasil ditambahkan" });
    } catch (error) {
        return Response.json({ error: error.message });
    }
}
