import Database from "better-sqlite3";
import fs from "fs";

const db = new Database("database/ecommerce.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS products (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 nama TEXT,
 harga INTEGER,
 gambar TEXT,
 deskripsi TEXT
)
`).run();

export default db;