import db from "../../../../lib/database";

export async function GET() {
    try {
        const rooms = await new Promise((resolve, reject) => {
            db.query("SELECT * FROM rooms", (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        return new Response(JSON.stringify(rooms), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        console.error("GET API Error:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { photo, code_room, name, description, room_size, amenities, price, guests, available } = body;

        const result = await new Promise((resolve, reject) => {
            const query = `
                INSERT INTO rooms (photo, code_room, name, description, room_size, amenities, price, guests, available)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            db.query(
                query,
                [photo, code_room, name, description, room_size, amenities, price || 0, guests || 0, available !== undefined ? available : 1],
                (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                }
            );
        });

        return new Response(JSON.stringify({ success: true, message: "Room added successfully", insertId: result.insertId }), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        });
    } catch (error) {
        console.error("POST API Error:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
