"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems } from "@/data/siteData";

type NavbarProps = {
  forceDark?: boolean;
};

export default function Navbar({ forceDark = false }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = forceDark
    ? "bg-accent-500 text-white shadow-accent"
    : "bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-colors ${
        forceDark
          ? "border-white/10 bg-slate-950/80"
          : "border-white/60 bg-white/78 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-slate-950/70"
      }`}>
        <div className="section-shell">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className={`overflow-hidden rounded-2xl border shadow-sm ${
                forceDark
                  ? "border-white/10 bg-slate-900"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"
              }`}>
                <Image
                  src="/brand.png"
                  alt="Madal ICT Solutions logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover"
                  priority
                />
              </div>
              <div>
                <p className={`text-base font-bold tracking-tight ${forceDark ? "text-white" : "text-slate-950 dark:text-white"}`}>
                  Madal ICT Solutions
                </p>
                <p className={`text-xs font-medium uppercase tracking-[0.22em] ${forceDark ? "text-accent-300" : "text-accent-500 dark:text-accent-300"}`}>
                  Digital Innovation
                </p>
              </div>
            </Link>

            <div className={`hidden items-center gap-2 rounded-full border px-2 py-2 lg:flex ${
              forceDark
                ? "border-white/10 bg-white/5"
                : "border-slate-200/80 bg-white/85 dark:border-white/10 dark:bg-slate-900/70"
            }`}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? activeClass
                        : forceDark
                          ? "text-slate-300 hover:bg-white/10 hover:text-white"
                          : "text-slate-600 hover:bg-white hover:text-accent-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-accent-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Link href="/contact" className="button-primary px-5">
                Start a Project
              </Link>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition ${
                  forceDark
                    ? "border-white/10 bg-slate-900 text-slate-200 hover:border-accent-500/60 hover:text-accent-300"
                    : "border-slate-200 bg-white text-slate-700 hover:border-accent-300 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-500/60 dark:hover:text-accent-300"
                }`}
                onClick={() => setIsOpen((current) => !current)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="space-y-1.5">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </span>
              </button>
            </div>
          </nav>

          {isOpen && (
            <div className="pb-4 lg:hidden">
              <div className={`space-y-2 rounded-3xl border p-4 backdrop-blur ${
                forceDark
                  ? "border-white/10 bg-slate-900/95"
                  : "card-surface dark:bg-slate-900/95"
              }`}>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? activeClass
                          : forceDark
                            ? "text-slate-200 hover:bg-white/10 hover:text-white"
                            : "text-slate-700 hover:bg-slate-50 hover:text-accent-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-accent-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="button-primary flex w-full justify-center"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="h-[88px] sm:h-[92px]" aria-hidden="true" />
    </>
  );
}
