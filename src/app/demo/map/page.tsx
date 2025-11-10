import Map from "@/components/Map";

export default function DemoMap() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold mb-4">Demo Map</h1>
      <Map lat={25.7617} lng={-80.1918} zoom={11} />
    </main>
  );
}
