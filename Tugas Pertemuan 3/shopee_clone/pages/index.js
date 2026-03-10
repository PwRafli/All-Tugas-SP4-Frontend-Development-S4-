import Link from "next/link"
import db from "../lib/db"

export async function getServerSideProps() {

    const products = await new Promise((resolve, reject) => {

        db.all("SELECT * FROM products", [], (err, rows) => {

            if (err) {
                console.error(err)
                reject(err)
            }

            resolve(rows || [])
        })

    })

    return {
        props: { products }
    }
}

export default function Home({ products }) {

    return (
        <div className="container mt-4">

            <div className="row">

                {products.length === 0 && (
                    <p>Tidak ada produk.</p>
                )}

                {products.map((p) => (

                    <div className="col-md-3 mb-4" key={p.id}>

                        <div className="card">

                            <img
                                src={p.image}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                                alt={p.name}
                            />

                            <div className="card-body text-center">

                                <h6>{p.name}</h6>

                                <p className="text-danger">
                                    Rp {p.price.toLocaleString()}
                                </p>

                                <Link href={`/product/${p.id}`}>
                                    <button className="btn btn-danger">
                                        Detail
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}