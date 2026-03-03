async function getProducts() {

    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store"
    });

    return res.json();
}

export default async function Home() {

    const products = await getProducts();

    return (
        <main>
            <h1>E-Commerce Dengan Next.js + SQLite</h1>

            <div style={{ display: "flex", gap: "20px" }}>
                {products.map((p) => (
                    <div key={p.id} style={{ border: "1px solid #ccc", padding: 20 }}>
                        <img src={`/images/${p.gambar}`} width="150" />
                        <h3>{p.nama}</h3>
                        <p>Rp {p.harga}</p>
                        <p>{p.deskripsi}</p>
                    </div>
                ))}
            </div>

        </main>
    );
}