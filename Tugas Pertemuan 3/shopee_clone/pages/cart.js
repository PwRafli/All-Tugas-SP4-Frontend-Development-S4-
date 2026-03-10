import { useCart } from "../contexts/CartContext"

export default function CartPage() {

    const { cart, removeFromCart } = useCart()

    const total = cart.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    )

    return (
        <div className="container mt-4">

            <h3>Keranjang Belanja</h3>

            {cart.length === 0 && (
                <p>Keranjang kosong</p>
            )}

            {cart.map((p) => (

                <div key={p.id} className="card mb-3">

                    <div className="card-body d-flex justify-content-between">

                        <div>

                            <h6>{p.name}</h6>

                            <p>
                                Rp {p.price.toLocaleString()}
                            </p>

                            <span>Qty: {p.quantity}</span>

                        </div>

                        <button
                            className="btn btn-danger"
                            onClick={() => removeFromCart(p.id)}
                        >
                            Hapus
                        </button>

                    </div>

                </div>

            ))}

            {cart.length > 0 && (

                <div className="text-end">

                    <h4>Total: Rp {total.toLocaleString()}</h4>

                    <button className="btn btn-success">
                        Checkout
                    </button>

                </div>

            )}

        </div>
    )
}