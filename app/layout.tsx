import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { House, Menu, Store, X } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace",
  description: "A marketplace storefront taking shape.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans")}
    >
      <body className="min-h-full">
        <div className="app-shell">
          <aside className="desktop-sidebar" aria-label="Primary sidebar">
            <Link className="brand-link" href="/">
              <span className="brand-mark"><Store aria-hidden="true" /></span>
              <span>marketplace</span>
            </Link>
            <div className="sidebar-section-label">Workspace</div>
            <nav aria-label="Primary navigation">
              <Link className="sidebar-link" href="/" aria-current="page">
                <House aria-hidden="true" />
                <span>Home</span>
              </Link>
            </nav>
            <div className="sidebar-footer">
              <span className="status-dot" aria-hidden="true" />
              <div>
                <strong>Preview workspace</strong>
                <span>Catalog in progress</span>
              </div>
            </div>
          </aside>

          <div className="app-column">
            <header className="topbar">
              <details className="mobile-navigation">
                <summary aria-label="Toggle navigation menu">
                  <Menu className="menu-icon" aria-hidden="true" />
                  <X className="close-icon" aria-hidden="true" />
                </summary>
                <div className="mobile-menu-panel">
                  <Link className="brand-link" href="/">
                    <span className="brand-mark"><Store aria-hidden="true" /></span>
                    <span>marketplace</span>
                  </Link>
                  <nav aria-label="Mobile navigation">
                    <Link className="sidebar-link" href="/" aria-current="page">
                      <House aria-hidden="true" />
                      <span>Home</span>
                    </Link>
                  </nav>
                </div>
              </details>
              <div className="topbar-title">
                <span className="topbar-kicker">Marketplace</span>
                <span className="topbar-divider" aria-hidden="true">/</span>
                <span className="topbar-current">Home</span>
              </div>
              <span className="preview-label"><span className="status-dot" aria-hidden="true" /> Preview</span>
            </header>
            <main id="main-content" className="app-main">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
