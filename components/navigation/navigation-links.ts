import { House, LayoutGrid, Shapes } from "lucide-react";
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
  {
    id: "products",
    label: "Products",
    href: "/products",
    icon: LayoutGrid,
  },
  {
    id: "categories",
    label: "Categories",
    href: "/dashboard/categories",
    icon: Shapes,
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
