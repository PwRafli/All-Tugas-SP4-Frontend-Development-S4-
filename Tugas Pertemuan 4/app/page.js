async function getRooms() {
  const res = await fetch("http://localhost:3000/api/rooms", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const rooms = await getRooms();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Daftar Room</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {rooms.map((room) => (
          <div
            key={room.id}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              width: 250,
              borderRadius: 10,
            }}
          >
            <img
              src={`/images/${room.photo}`}
              width="100%"
              style={{ borderRadius: 10 }}
            />

            <h3>{room.name}</h3>
            <p><b>Kode:</b> {room.code_room}</p>
            <p><b>Harga:</b> Rp {room.price}</p>
            <p><b>Ukuran:</b> {room.room_size}</p>
            <p><b>Tamu:</b> {room.guests}</p>
            <p><b>Status:</b> {room.available}</p>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}