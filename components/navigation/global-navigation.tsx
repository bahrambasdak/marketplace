"use client";

import React, { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { Menu, Store, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  getActiveNavigationLink,
  isNavigationLinkActive,
  navigationLinks,
} from "@/components/navigation/navigation-links";

type GlobalNavigationProps = {
  placement: "desktop" | "mobile";
};

export function GlobalNavigation({ placement }: GlobalNavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);

  if (placement === "desktop") {
    return (
      <nav aria-label="Primary navigation">
        {navigationLinks.map(({ id, label, href, icon: Icon }) => {
          const isActive = isNavigationLinkActive(pathname, href);

          return (
            <Link
              key={id}
              className="sidebar-link"
              href={href}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      mobileMenuToggleRef.current?.focus();
    }
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className="mobile-navigation" onKeyDown={handleKeyDown}>
      <button
        ref={mobileMenuToggleRef}
        className="mobile-navigation-toggle"
        type="button"
        aria-label={
          isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-primary-navigation"
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        <Menu className="menu-icon" aria-hidden="true" />
        <X className="close-icon" aria-hidden="true" />
      </button>
      <div
        id="mobile-primary-navigation"
        className="mobile-menu-panel"
        hidden={!isMobileMenuOpen}
      >
        <Link
          className="brand-link"
          href="/"
          aria-label="Marketplace home"
          onClick={closeMobileMenu}
        >
          <span className="brand-mark">
            <Store aria-hidden="true" />
          </span>
          <span>marketplace</span>
        </Link>
        <nav aria-label="Mobile primary navigation">
          {navigationLinks.map(({ id, label, href, icon: Icon }) => {
            const isActive = isNavigationLinkActive(pathname, href);

            return (
              <Link
                key={id}
                className="sidebar-link"
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMobileMenu}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function CurrentNavigationLabel() {
  const pathname = usePathname();
  return <>{getActiveNavigationLink(pathname)?.label ?? "Marketplace"}</>;
}
