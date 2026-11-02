"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface PackageItem {
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: string;
  tags: string[];
  imageUrl: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  logoUrl: string;
  bannerUrl: string;
  packages: PackageItem[];
}

export const defaultPackages: PackageItem[] = [
  {
    title: "Kaziranga Wildlife Safari",
    location: "Assam, India",
    duration: "3 Days / 2 Nights · Safari",
    price: "₹12,500",
    rating: "4.8",
    tags: ["Best Seller", "Wildlife"],
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Meghalaya Waterfall Escape",
    location: "Cherrapunji, Meghalaya",
    duration: "4 Days / 3 Nights · Nature",
    price: "₹14,900",
    rating: "4.9",
    tags: ["Customizable", "Adventure"],
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sikkim Himalayan Retreat",
    location: "Gangtok, Sikkim",
    duration: "5 Days / 4 Nights · Mountains",
    price: "₹18,500",
    rating: "4.7",
    tags: ["Guided", "Popular"],
    imageUrl:
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tawang Monastery Journey",
    location: "Tawang, Arunachal Pradesh",
    duration: "6 Days / 5 Nights · Heritage",
    price: "₹22,000",
    rating: "4.8",
    tags: ["Cultural", "Heritage"],
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Majuli River Island Culture",
    location: "Majuli, Assam",
    duration: "2 Days / 1 Night · Culture",
    price: "₹9,800",
    rating: "4.6",
    tags: ["Local", "Relax"],
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ziro Valley Nature Trails",
    location: "Ziro, Arunachal Pradesh",
    duration: "3 Days / 2 Nights · Nature",
    price: "₹13,200",
    rating: "4.7",
    tags: ["Customizable", "Scenic"],
    imageUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  },
];

export const defaultSiteConfig: SiteConfig = {
  siteTitle: "Go Explore",
  siteDescription: "Curated North East India getaways, crafted for unforgettable journeys.",
  logoUrl: "/reference.jpeg",
  bannerUrl:
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  packages: defaultPackages,
};

const getString = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim().length > 0 ? value : fallback;

const normalizePackages = (value: unknown): PackageItem[] => {
  if (!Array.isArray(value)) {
    return defaultPackages;
  }

  const normalized = value
    .map((pkg) => {
      const record = pkg as Record<string, unknown>;
      return {
        title: getString(record.title, ""),
        location: getString(record.location, ""),
        duration: getString(record.duration, ""),
        price: getString(record.price, ""),
        rating: getString(record.rating, ""),
        tags: Array.isArray(record.tags)
          ? record.tags.filter((tag) => typeof tag === "string" && tag.trim().length > 0)
          : [],
        imageUrl: getString(record.imageUrl, ""),
      };
    })
    .filter((pkg) => pkg.title || pkg.location || pkg.duration || pkg.imageUrl);

  return normalized.length ? normalized : defaultPackages;
};

export const normalizeSiteConfig = (value?: unknown): SiteConfig => {
  const record = (value ?? {}) as Record<string, unknown>;

  return {
    siteTitle: getString(record.siteTitle, defaultSiteConfig.siteTitle),
    siteDescription: getString(record.siteDescription, defaultSiteConfig.siteDescription),
    logoUrl: getString(record.logoUrl, defaultSiteConfig.logoUrl),
    bannerUrl: getString(record.bannerUrl, defaultSiteConfig.bannerUrl),
    packages: normalizePackages(record.packages),
  };
};

interface SiteConfigContextValue {
  config: SiteConfig;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SiteConfigContext = createContext<SiteConfigContextValue | undefined>(undefined);

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [loading, setLoading] = useState(true);

  const loadConfig = async () => {
    setLoading(true);
    try {
      const snapshot = await getDoc(doc(db, "config", "site"));
      if (snapshot.exists()) {
        setConfig(normalizeSiteConfig(snapshot.data()));
      } else {
        await setDoc(doc(db, "config", "site"), defaultSiteConfig, { merge: false });
        setConfig(defaultSiteConfig);
      }
    } catch (error) {
      console.error("Failed to load site config", error);
      setConfig(defaultSiteConfig);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

  const value = useMemo(
    () => ({
      config,
      loading,
      refresh: loadConfig,
    }),
    [config, loading],
  );

  return <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>;
}

export const useSiteConfig = () => {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error("useSiteConfig must be used within SiteConfigProvider");
  }
  return context;
};