"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import {
  defaultPackages,
  defaultSiteConfig,
  normalizeSiteConfig,
  PackageItem,
  SiteConfig,
} from "../../../lib/site-config";

export default function AdminConfigPage() {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Load config from Firestore
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const configDoc = doc(db, "config", "site");
        const snapshot = await getDoc(configDoc);
        if (snapshot.exists()) {
          setConfig(normalizeSiteConfig(snapshot.data()));
        } else {
          setConfig(defaultSiteConfig);
        }
      } catch (err: any) {
        setError(err.message || "Failed to load configuration.");
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handlePackageChange = (
    index: number,
    field: keyof PackageItem,
    value: string,
  ) => {
    setConfig((prev) => {
      const updated = [...prev.packages];
      const current = updated[index] ?? defaultPackages[0];
      updated[index] = {
        ...current,
        [field]: field === "tags" ? value.split(",").map((tag) => tag.trim()).filter(Boolean) : value,
      } as PackageItem;
      return { ...prev, packages: updated };
    });
  };

  const addPackage = () => {
    setConfig((prev) => ({
      ...prev,
      packages: [
        ...prev.packages,
        {
          title: "",
          location: "",
          duration: "",
          price: "",
          rating: "",
          tags: [],
          imageUrl: "",
        },
      ],
    }));
  };

  const removePackage = (index: number) => {
    setConfig((prev) => ({
      ...prev,
      packages: prev.packages.filter((_, i) => i !== index),
    }));
  };

  const resetPackages = () => {
    setConfig((prev) => ({ ...prev, packages: defaultPackages }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      // Use setDoc to overwrite the config document
      await setDoc(doc(db, "config", "site"), config, { merge: false });
      setMessage("Configuration saved successfully.");
    } catch (err: any) {
      setError(err.message || "Failed to save configuration.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Site Configuration</h2>
          <p className="text-sm text-gray-500">Update logo, banner, and North East packages.</p>
        </div>
        <button
          type="button"
          onClick={resetPackages}
          className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Reset Default Packages
        </button>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1" htmlFor="siteTitle">
                Site Title
              </label>
              <input
                id="siteTitle"
                name="siteTitle"
                type="text"
                value={config.siteTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="siteDescription">
                Site Description
              </label>
              <textarea
                id="siteDescription"
                name="siteDescription"
                value={config.siteDescription}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={4}
                required
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1" htmlFor="logoUrl">
                Logo URL
              </label>
              <input
                id="logoUrl"
                name="logoUrl"
                type="text"
                value={config.logoUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="/reference.jpeg or https://..."
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1" htmlFor="bannerUrl">
                Banner Image URL
              </label>
              <input
                id="bannerUrl"
                name="bannerUrl"
                type="text"
                value={config.bannerUrl}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="https://images.unsplash.com/..."
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">North East Packages</h3>
            <button
              type="button"
              onClick={addPackage}
              className="px-3 py-2 text-sm border border-emerald-200 rounded-lg text-emerald-700 hover:bg-emerald-50"
            >
              + Add Package
            </button>
          </div>
          <div className="space-y-4">
            {config.packages.map((pkg, index) => (
              <div key={`${pkg.title}-${index}`} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold">Package {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removePackage(index)}
                    className="text-xs text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={pkg.title}
                      onChange={(e) => handlePackageChange(index, "title", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    <input
                      type="text"
                      value={pkg.location}
                      onChange={(e) => handlePackageChange(index, "location", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <input
                      type="text"
                      value={pkg.duration}
                      onChange={(e) => handlePackageChange(index, "duration", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Price (INR)</label>
                    <input
                      type="text"
                      value={pkg.price}
                      onChange={(e) => handlePackageChange(index, "price", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="₹12,500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Rating</label>
                    <input
                      type="text"
                      value={pkg.rating}
                      onChange={(e) => handlePackageChange(index, "rating", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="4.8"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={pkg.tags.join(", ")}
                      onChange={(e) => handlePackageChange(index, "tags", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                      type="text"
                      value={pkg.imageUrl}
                      onChange={(e) => handlePackageChange(index, "imageUrl", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="https://images.unsplash.com/..."
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Configuration"}
        </button>
      </form>
    </div>
  );
}
