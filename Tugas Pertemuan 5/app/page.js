"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [rooms, setRooms] = useState([]);

    const getRooms = async () => {
        const res = await fetch("/api/rooms");
        const data = await res.json();
        setRooms(data);
    };

    useEffect(() => {
        getRooms();
    }, []);

    const addToCart = async (id) => {
        await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                room_id: id,
                qty: 1,
            }),
        });

        alert("Ditambahkan ke Hotel Checkout");
    };

    return (
        <div>
            <h1 className="page-title">Available Hotel / Rooms</h1>

            <div className="grid">
                {rooms.length > 0 ? rooms.map((item) => (
                    <div className="card" key={item.id}>
                        {item.photo && <img src={item.photo} alt={item.Hotel_name} className="card-img" />}
                        <div className="card-content">
                            <div className="card-header">
                                <h3 className="card-title">{item.Hotel_name}</h3>
                                <span className="badge">{item.room_code}</span>
                            </div>
                            <p className="card-desc">{item.description}</p>
                            
                            <div className="card-meta">
                                <span><strong>Size:</strong> {item.room_size}</span>
                                <span><strong>Guests:</strong> Up to {item.guests}</span>
                            </div>
                            <p className="card-facilities"><strong>Facilities:</strong> {item.facilities}</p>
                            
                            <p className="card-price">Rp {item.price.toLocaleString('id-ID')} / night</p>
                            <button className="btn" onClick={() => addToCart(item.id)} disabled={!item.available}>
                                {item.available ? "Book Room" : "Sold Out"}
                            </button>
                        </div>
                    </div>
                )) : <p>Loading rooms...</p>}
            </div>
        </div>
    );
}