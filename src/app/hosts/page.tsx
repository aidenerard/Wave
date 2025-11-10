"use client";
import { useState } from "react";

export default function Hosts() {
  const [status, setStatus] =
    useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // cache the form BEFORE any await (React pools events)
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      setStatus("sending");
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      setStatus("ok");
      form.reset(); // safe now
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-bold">Become a host</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input name="name" required placeholder="Your name" className="w-full rounded border px-3 py-2" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded border px-3 py-2" />
        <input name="boat" placeholder="Boat type/model" className="w-full rounded border px-3 py-2" />
        <button
          disabled={status === "sending"}
          className="rounded bg-black px-5 py-2 text-white disabled:opacity-60"
        >
          {status === "sending" ? "Submitting..." : "Join the waitlist"}
        </button>
        {status === "ok" && <p className="text-green-600">Thanks! We’ll be in touch.</p>}
        {status === "error" && <p className="text-red-600">Something went wrong. Try again.</p>}
      </form>
    </main>
  );
}
