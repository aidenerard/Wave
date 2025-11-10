import Stripe from "stripe";

export async function POST() {
  // Let the SDK use its pinned API version; no apiVersion needed.
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Boat rental (demo)" },
          unit_amount: 9900, // $99.00
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/?status=success`,
    cancel_url: `${baseUrl}/?status=cancelled`,
  });

  return Response.json({ url: session.url });
}
