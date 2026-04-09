"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
    const [cart, setCart] = useState([]);

    const getCart = async () => {
        const res = await fetch("/api/cart");
        const data = await res.json();
        setCart(data);
    };

    useEffect(() => {
        getCart();
    }, []);

    const deleteFromCart = async (id) => {
        await fetch("/api/cart", {
            method: "DELETE",
            body: JSON.stringify({ id }),
        });
        getCart(); // refresh UI after delete
    };

    return (
        <div>
            <h1 className="page-title">Hotel Checkout</h1>

            <div className="cart-list">
                {cart.length > 0 ? cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-info">
                            {item.photo && <img src={item.photo} alt={item.Hotel_name} className="cart-img" />}
                            <div className="cart-item-details">
                                <h3 className="card-title">{item.Hotel_name}</h3>
                                <p>Rp {item.price.toLocaleString('id-ID')} / night</p>
                            </div>
                        </div>
                        <div className="cart-item-total" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <p className="card-price" style={{margin: 0}}>Total: Rp {(item.price * item.qty).toLocaleString('id-ID')}</p>
                            <button className="btn-delete" onClick={() => deleteFromCart(item.id)}>Hapus</button>
                        </div>
                    </div>
                )) : <p>Checkout session empty.</p>}
            </div>
        </div>
    );
}