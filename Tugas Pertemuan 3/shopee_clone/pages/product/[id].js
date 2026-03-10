import { useCart } from "../../contexts/CartContext"
import db from "../../lib/db"

export async function getServerSideProps({ params }) {

    const product = await new Promise((resolve, reject) => {

        db.get(
            "SELECT * FROM products WHERE id = ?",
            [params.id],
            (err, row) => {

                if (err) reject(err)

                resolve(row)

            }
        )

    })

    return {
        props: { product }
    }
}

export default function Product({ product }) {

    const { addToCart } = useCart()

    return (
        <div className="container mt-4">

            <div className="row">

                <div className="col-md-6">

                    <img
                        src={product.image}
                        className="img-fluid"
                    />

                </div>

                <div className="col-md-6">

                    <h3>{product.name}</h3>

                    <h4 className="text-danger">
                        Rp {product.price.toLocaleString()}
                    </h4>

                    <p>{product.description}</p>

                    <button
                        className="btn btn-success"
                        onClick={() => addToCart(product)}
                    >
                        Tambah ke Keranjang
                    </button>

                </div>

            </div>

        </div>
    )
}