import sqlite3 from "sqlite3";
import { open } from "sqlite";

const dbPromise = open({
    filename: "./HomeStay.db",
    driver: sqlite3.Database,
});

export async function initDB() {
    const db = await dbPromise;
    
    // Create tables if they don't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            photo TEXT NOT NULL,
            room_code TEXT NOT NULL,
            Hotel_name TEXT NOT NULL,
            description TEXT NOT NULL,
            facilities TEXT NOT NULL,
            room_size TEXT NOT NULL,
            price INTEGER NOT NULL,
            guests INTEGER NOT NULL,
            available INTEGER NOT NULL DEFAULT 1
        );

        CREATE TABLE IF NOT EXISTS cart (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            room_id INTEGER NOT NULL,
            qty INTEGER NOT NULL DEFAULT 1,
            FOREIGN KEY (room_id) REFERENCES rooms(id)
        );
    `);
    
    // Seed database if empty
    const count = await db.get("SELECT COUNT(*) as count FROM rooms");
    if (count.count === 0) {
        // Hotel 1
        await db.run(
            "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                '/images/hotel1.png',
                'DEL-001',
                'Grand Serenade Hotel',
                'Beautiful city view room with modern amenities and a king-sized bed.',
                'Free Wi-Fi, Pool, Gym, Spa, Breakfast Included',
                '45m²',
                850000,
                2,
                1
            ]
        );
        // Hotel 2
        await db.run(
            "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                '/images/hotel2.png',
                'FAM-002',
                'Bali Paradise Resort',
                'Spacious family suite featuring a private balcony overlooking the ocean.',
                'Free Wi-Fi, Beach Access, Private Pool, Kitchenette',
                '80m²',
                1500000,
                4,
                1
            ]
        );
        // Hotel 3
        await db.run(
            "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                '/images/hotel3.png',
                'STD-003',
                'Urban Minimalist Stay',
                'Cozy and highly functional compact room right in the heart of downtown.',
                'Free Wi-Fi, AC, Workspace, Smart TV',
                '25m²',
                450000,
                1,
                1
            ]
        );
        // Hotel 4
        await db.run(
            "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                '/images/hotel4.png',
                'LXC-004',
                'Luxury Penthouse Suite',
                'Breathtaking 360-degree city views with premium furnishing and a private jacuzzi.',
                'Free Wi-Fi, Jacuzzi, Butler Service, Mini Bar, Balcony',
                '120m²',
                4500000,
                3,
                1
            ]
        );
        // Hotel 5
        await db.run(
            "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                '/images/hotel5.png',
                'MNT-005',
                'Mountain View Chalet',
                'Rustic and charming aesthetic right beside the scenic mountain slopes.',
                'Fireplace, Hiking Trail Access, Kitchen, Pet Friendly',
                '60m²',
                850000,
                4,
                1
            ]
        );
        // Hotel 6
        await db.run(
            "INSERT INTO rooms (photo, room_code, Hotel_name, description, facilities, room_size, price, guests, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                '/images/hotel6.png',
                'POD-006',
                'Budget Backpacker Pod',
                'Simple, clean, and extremely affordable pod for solo travelers looking to save.',
                'Shared Bathroom, Free Wi-Fi, Common Area, Lockers',
                '5m²',
                120000,
                1,
                1
            ]
        );
    }
    
    return db;
}

export default dbPromise;
