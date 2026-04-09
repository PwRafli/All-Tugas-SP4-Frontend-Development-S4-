import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'HomeStay.db',
  description: 'A modern hotel booking application built with Next.js and SQLite',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header className="navbar">
                    <h2>HomeStay.db</h2>
                    <nav className="nav-links">
                        <Link href="/">Hotel/Rooms</Link>
                        <Link href="/cart">Hotel Checkout</Link>
                    </nav>
                </header>
                <main className="container">
                    {children}
                </main>
            </body>
        </html>
    );
}