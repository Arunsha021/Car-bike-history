import Link from "next/link";

const popularBrands = [
  "toyota",
  "honda",
  "ford",
  "bmw",
  "audi",
  "hyundai",
  "tata",
  "mahindra",
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* 🔥 HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl">
        <div className="px-8 py-20 text-center space-y-6">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Vehicle History Platform
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Scalable SEO-ready system built to support millions of vehicle
            history pages with real-time updates and resilient API handling.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition">
            Explore Brands
          </button>
        </div>
      </section>

      {/* 🚗 POPULAR BRANDS */}
      <section>
        <h3 className="text-3xl font-bold mb-10 text-slate-800">
          Popular Brands
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {popularBrands.map((brand, index) => (
            <Link
              key={brand}
              href={`/brands/${brand}`}
              className={`rounded-2xl p-8 text-center font-semibold text-lg capitalize text-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index % 4 === 0
                  ? "bg-gradient-to-br from-pink-500 to-red-500"
                  : index % 4 === 1
                  ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                  : index % 4 === 2
                  ? "bg-gradient-to-br from-green-500 to-emerald-600"
                  : "bg-gradient-to-br from-orange-500 to-yellow-500"
              }`}
            >
              {brand}
            </Link>
          ))}
        </div>
      </section>

      {/* 🧱 FEATURES SECTION */}
      <section className="grid md:grid-cols-2 gap-10">
        <FeatureCard
          title="🚀 Scalable to Pages"
          description="Uses Incremental Static Regeneration (ISR) and dynamic routing to generate pages on demand."
          color="from-blue-500 to-indigo-600"
        />
        <FeatureCard
          title="🔗 API Aggregation"
          description="Parallel API fetching with resilience layer ensures partial failures don't break pages."
          color="from-purple-500 to-pink-500"
        />
        <FeatureCard
          title="🔍 SEO Optimized"
          description="Server-rendered metadata ensures crawlability even during API latency."
          color="from-emerald-500 to-green-600"
        />
        <FeatureCard
          title="⚡ Near Real-Time Updates"
          description="On-demand revalidation refreshes content without full rebuilds."
          color="from-orange-500 to-red-500"
        />
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="rounded-3xl bg-white shadow-lg border border-slate-200 p-10 hover:shadow-2xl transition">
      <div
        className={`inline-block px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${color}`}
      >
        {title}
      </div>
      <p className="mt-6 text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
