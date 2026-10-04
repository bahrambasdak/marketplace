import { House } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationLink = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navigationLinks = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: House,
  },
] satisfies readonly NavigationLink[];

export function isNavigationLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function getActiveNavigationLink(pathname: string) {
  return navigationLinks.find((link) =>
    isNavigationLinkActive(pathname, link.href),
  );
}
