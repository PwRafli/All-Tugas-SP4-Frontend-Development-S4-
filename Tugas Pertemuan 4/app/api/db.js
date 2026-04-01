import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connect() {
  const db = await open({
    filename: path.join(process.cwd(), 'ecommerce_db.sqlite'),
    driver: sqlite3.Database,
  });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS room (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      photo TEXT,
      code_room TEXT,
      name TEXT,
      description TEXT,
      room_size TEXT,
      price REAL,
      guests INTEGER,
      available INTEGER
    );
  `);
  return db;
}
