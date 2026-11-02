"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../lib/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, loading, logout } = useAuth();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", href: "/admin", icon: "📊" },
    { id: "packages", label: "Package Listings", href: "/admin/tours", icon: "🧳" },
    { id: "tours", label: "Tour Listings", href: "/admin/tours", icon: "🌍" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Link href="/admin/login" className="text-blue-600 underline">
          Please log in to access the admin panel
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="bg-white text-black px-2 py-1 rounded text-sm">
              GE
            </span>
            Go Explore Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors"
          >
            <span>🏠</span>
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-gray-800">
            {menuItems.find((item) => item.id === activeTab)?.label ||
              "Admin Panel"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
              AD
            </div>
            <span className="text-sm text-gray-600 font-medium">
              Administrator
            </span>
            <button
              onClick={logout}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
