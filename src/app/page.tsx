import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold">🚤 Wave — Boat sharing made simple</h1>
      <p className="mt-4 text-lg text-gray-600">
        Book local boats with keyless pickup and trip protection.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/how-it-works" className="rounded-xl px-5 py-3 bg-black text-white">
          How it works
        </Link>
        <Link href="/hosts" className="rounded-xl px-5 py-3 border">
          Become a host
        </Link>
        {/* add links to your demos */}
        <Link href="/demo/map" className="rounded-xl px-5 py-3 border">
          Demo Map
        </Link>
        <Link href="/demo/checkout" className="rounded-xl px-5 py-3 border">
          Demo Checkout
        </Link>
      </div>
    </main>
  );
}
