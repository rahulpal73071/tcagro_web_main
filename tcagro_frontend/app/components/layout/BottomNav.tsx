"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

const ITEMS = [
  { href: "/", icon: "🏠", key: "nav_home" as const },
  { href: "/products", icon: "🌱", key: "nav_products" as const },
  { href: "/farms-and-nursery", icon: "🚜", key: "nav_farms" as const },
  { href: "/#contact", icon: "📞", key: "nav_contact" as const },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="bottom-nav">
      {ITEMS.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]) && item.href !== "/#contact";
        return (
          <Link key={item.href} href={item.href} className={`bottom-nav-item ${active ? "active" : ""}`}>
            <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
            <span>{t(item.key)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
