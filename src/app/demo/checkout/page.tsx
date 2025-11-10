import DemoCheckoutButton from "@/components/DemoCheckoutButton";

export default function DemoCheckoutPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-4">Demo Checkout</h1>
      <p className="mb-6 text-gray-600">This uses Stripe Checkout in test mode.</p>
      <DemoCheckoutButton />
    </main>
  );
}
