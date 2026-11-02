"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tours/", label: "Packages" },
    { href: "/cars/", label: "Tours" },
    { href: "/about/", label: "About Us" },
    { href: "/contact/", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-sm">GE</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-emerald-900">Go Explore</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login/"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/admin/login/"
              className="px-5 py-2.5 text-sm font-medium bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Register Now
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-50"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-slate-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-emerald-100">
                <Link
                  href="/login/"
                  className="flex-1 px-4 py-3 text-sm font-medium border border-emerald-200 rounded-lg text-center"
                >
                  Login
                </Link>
                <Link
                  href="/admin/login/"
                  className="flex-1 px-4 py-3 text-sm font-medium bg-emerald-600 text-white rounded-lg text-center"
                >
                  Register
                </Link>
              </div>
              <Link
                href="/admin/login/"
                className="text-xs text-emerald-600 font-semibold uppercase tracking-wide px-4"
              >
                Admin Login / Partner Portal
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
