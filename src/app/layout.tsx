import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";            // ← add this

export const metadata: Metadata = {
  title: "Wave • Boat sharing",
  description: "Book local boats safely and easily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold">Wave</Link>
            <div className="flex gap-6 text-sm">
              <Link href="/how-it-works">How it works</Link>
              <Link href="/hosts">Hosts</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="mt-24 border-t">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Wave
          </div>
        </footer>
      </body>
    </html>
  );
}
