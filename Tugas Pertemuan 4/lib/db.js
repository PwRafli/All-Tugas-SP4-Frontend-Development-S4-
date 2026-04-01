import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function connect() {
    return open({
        filename: path.join(process.cwd(), "database", "ecommerce.db"),
        driver: sqlite3.Database,
    });
}