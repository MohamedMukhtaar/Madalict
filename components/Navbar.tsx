"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems } from "@/data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/75">
        <div className="section-shell">
          <nav className="flex items-center justify-between py-4">
            <Link href="#top" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
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
                <p className="text-base font-bold tracking-tight text-slate-950 dark:text-white">
                  Madal ICT Solutions
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-500 dark:text-accent-300">
                  Digital Innovation
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <Link href="#contact" className="button-primary">
                Get Started
              </Link>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-accent-300 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent-500/60 dark:hover:text-accent-300"
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
              <div className="card-surface space-y-2 p-4 dark:bg-slate-900/95">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-accent-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-accent-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="button-primary flex w-full"
                >
                  Get Started
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