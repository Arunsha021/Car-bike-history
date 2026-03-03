import { notFound } from "next/navigation";

const allowedBrands = [
  "honda",
  "ford",
  "bmw",
  "audi",
  "hyundai",
  "tata",
  "mahindra",
];

// Toyota intentionally removed to test 404

export default function BrandPage({
  params,
}: {
  params: { brandSlug: string };
}) {
  const brand = params.brandSlug;

  if (!allowedBrands.includes(brand)) {
    notFound(); // 🔥 triggers app/not-found.tsx
  }

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">{brand} Vehicles</h1>
    </div>
  );
}
