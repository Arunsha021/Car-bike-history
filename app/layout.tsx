import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Build Car & Bike History",
    template: "%s | Build Car & Bike History",
  },
  description:
    "Explore detailed car and bike history, specifications, pricing, and ownership insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 min-h-screen">
        <Providers>
          {/* Navbar */}
          <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-slate-200 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              {/* Logo */}
              <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Build Car & Bike History
              </h1>

              {/* Navigation */}
              <nav className="hidden md:flex gap-10 text-sm font-semibold text-slate-700 relative">
                <a href="#brands" className="group relative transition">
                  Brands
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href="#models" className="group relative transition">
                  Models
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a href="#features" className="group relative transition">
                  Features
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 py-14">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
              {/* Brand Section */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  🚗 Build Car & Bike History
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A scalable SEO-ready vehicle history platform built to support
                  millions of pages with resilient API aggregation and real-time
                  updates.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Brands
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Models
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Vehicle History
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Market Insights
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-white font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-sm">
                  <li>🚀 SEO Pages</li>
                  <li>🔗 API Aggregation</li>
                  <li>⚡ ISR & Revalidation</li>
                  <li>🔍 SEO Optimized</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Contact
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Terms
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <span>
                  © {new Date().getFullYear()} Build Car & Bike History. All
                  rights reserved.
                </span>
                {/* <span className="mt-2 md:mt-0">
                  Built with Next.js • TypeScript • ISR
                </span> */}
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
