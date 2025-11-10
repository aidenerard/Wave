"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Map({
  lat = 25.7617, lng = -80.1918, zoom = 11,
}: { lat?: number; lng?: number; zoom?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = new maplibregl.Map({
      container: ref.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      center: [lng, lat],
      zoom,
    });
    new maplibregl.Marker().setLngLat([lng, lat]).addTo(map);
    return () => map.remove();
  }, [lat, lng, zoom]);

  return <div ref={ref} style={{ height: 420, borderRadius: 12 }} />;
}
