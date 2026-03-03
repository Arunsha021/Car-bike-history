import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 space-y-8">
      {/* Animated Car Emoji */}
      <div className="text-7xl animate-bounce">🚗</div>

      <h1 className="text-5xl font-extrabold text-slate-800">
        Vehicle Not Found
      </h1>

      <p className="text-slate-600 max-w-xl">
        Oops! Looks like this vehicle took a wrong turn. The brand, model, or
        year you’re looking for doesn’t exist in our system.
      </p>

      <Link
        href="/"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
      >
        🏠 Back to Homepage
      </Link>
    </div>
  );
}
