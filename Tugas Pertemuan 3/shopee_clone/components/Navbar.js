import Link from "next/link"
import { useCart } from "../contexts/CartContext"

export default function Navbar() {

    const { cart } = useCart()

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    )

    return (
        <nav className="navbar navbar-dark bg-danger">
            <div className="container">

                <Link href="/" className="navbar-brand">
                    ShopeeClone
                </Link>

                <Link href="/cart" className="btn btn-light">
                    Cart ({totalItems})
                </Link>

            </div>
        </nav>
    )
}