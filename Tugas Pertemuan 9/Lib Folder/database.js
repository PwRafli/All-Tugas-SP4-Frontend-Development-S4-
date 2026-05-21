const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Sesuaikan dengan password database kamu
    database: 'database_db'
});

db.connect((err) => {
    if (err) {
        console.error('Gagal terhubung ke MySQL:', err);
        return;
    }
    console.log('Terhubung Ke MySQL!');

    // Inisialisasi Tabel Otomatis
    const query = `
    CREATE TABLE IF NOT EXISTS rooms (
        id INT AUTO_INCREMENT PRIMARY KEY,
        photo TEXT,
        code_room VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        room_size VARCHAR(100),
        amenities TEXT,
        price DOUBLE NOT NULL,
        guests INT NOT NULL,
        available INT DEFAULT 1
    )`;

    db.query(query, (err) => {
        if (err) console.error("Gagal membuat tabel rooms:", err);
    });

    // Inisialisasi Tabel Admin
    const queryAdmin = `
    CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    )`;
    db.query(queryAdmin, (err) => {
        if (err) {
            console.error("Gagal membuat tabel admins:", err);
        } else {
            // Cek apakah sudah ada admin
            db.query('SELECT COUNT(*) as count FROM admins', (err, results) => {
                if (!err && results[0].count === 0) {
                    db.query('INSERT INTO admins (username, password) VALUES (?, ?)', ['admin', 'admin123'], (err) => {
                        if (err) console.error("Gagal membuat admin default:", err);
                        else console.log("Admin default dibuat: admin / admin123");
                    });
                }
            });
        }
    });
});

module.exports = db;
