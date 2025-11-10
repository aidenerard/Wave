"use client";
import { useState } from "react";

export default function DemoCheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function startCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const { url } = await res.json();
      window.location.href = url; // redirect to Stripe-hosted checkout
    } catch (e) {
      console.error(e);
      setLoading(false);
      alert("Checkout failed. Try again.");
    }
  }

  return (
    <button
      onClick={startCheckout}
      disabled={loading}
      className="rounded bg-black px-5 py-3 text-white disabled:opacity-60"
    >
      {loading ? "Redirecting..." : "Book demo rental ($99)"}
    </button>
  );
}
