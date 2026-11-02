import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../lib/auth";
import { SiteConfigProvider } from "../lib/site-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Explore | Curated Travel & Tours",
  description: "Book curated travel packages, local experiences, and personalized tours with Go Explore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SiteConfigProvider>
            <Header />
            {children}
            <Footer />
          </SiteConfigProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
