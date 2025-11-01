import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Katalog Pertanian & Peternakan",
  description: "Website katalog produk pertanian dan peternakan dengan data dari Firebase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50 text-gray-800`}>
        {/* Navbar */}
        <nav className="bg-green-700 text-white px-6 py-3 flex items-center justify-between shadow">
          <h1 className="text-xl font-semibold">
            <Link href="/">Katalog TaniTernak</Link>
          </h1>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">
              Katalog
            </Link>
            <Link href="/upload" className="hover:underline">
              Upload Produk
            </Link>
          </div>
        </nav>

        {/* Konten halaman */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-green-100 text-center text-sm py-3 text-green-700 mt-10 border-t">
          © {new Date().getFullYear()} Katalog TaniTernak · Dibuat dengan ❤️ dan Firebase
        </footer>
      </body>
    </html>
      );
}
