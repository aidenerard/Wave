export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold">🚤 Wave — Boat sharing made simple</h1>
      <p className="mt-4 text-lg text-gray-600">
        Book local boats with keyless pickup and trip protection.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="/how-it-works" className="rounded-xl px-5 py-3 bg-black text-white">
          How it works
        </a>
        <a href="/hosts" className="rounded-xl px-5 py-3 border">
          Become a host
        </a>
      </div>
    </main>
  );
}
