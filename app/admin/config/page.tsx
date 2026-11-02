"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
}

export default function AdminConfigPage() {
  const [config, setConfig] = useState<SiteConfig>({
    siteTitle: "",
    siteDescription: "",
  });
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
          const data = snapshot.data();
          setConfig({
            siteTitle: (data.siteTitle as string) ?? "",
            siteDescription: (data.siteDescription as string) ?? "",
          });
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
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Site Configuration</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={handleSave} className="space-y-4">
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
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Configuration"}
        </button>
      </form>
    </div>
  );
}
