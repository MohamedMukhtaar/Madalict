"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems } from "@/data/siteData";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = () => {
    setIsOpen(false);

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300 ease-out ${
          scrolled
            ? "border-transparent bg-transparent"
            : "border-brand-100/70 bg-white/80 dark:border-white/10 dark:bg-brand-900/75"
        }`}
      >
        <div
          className={`section-shell rounded-2xl border transition-all duration-300 ease-out ${
            scrolled
              ? "mt-3 border-brand-100 bg-white/90 shadow-soft backdrop-blur-2xl dark:border-white/15 dark:bg-brand-800/95 dark:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.65)]"
              : "mt-0 border-transparent bg-transparent"
          }`}
        >
          <div className="px-5 sm:px-6">
            <nav className={`flex items-center justify-between transition-[padding] duration-300 ${scrolled ? "py-2" : "py-2.5"}`}>
              <Link href="/" onClick={handleLogoClick} className="flex items-center" aria-label="Madal ICT Solutions home">
                <Logo className="h-8 sm:h-9" priority />
              </Link>

              <div className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "text-accent-700 dark:text-accent-300"
                          : "text-slate-600 hover:bg-white hover:text-brand-800 dark:text-slate-300 dark:hover:bg-brand-900 dark:hover:text-accent-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden items-center gap-3 lg:flex ">
                <ThemeToggle />
                <Link href="/contact" className="button-primary px-5 text-white">
                Let’s Talk
                </Link>
              </div>

              <div className="flex items-center gap-3 lg:hidden">
                <ThemeToggle />
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 bg-white text-slate-700 shadow-sm transition hover:border-accent-300 hover:text-brand-800 dark:border-slate-700 dark:bg-brand-900 dark:text-slate-200 dark:hover:border-accent-500/60 dark:hover:text-accent-300"
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
                <div className="card-surface space-y-2 rounded-3xl border p-4 backdrop-blur dark:bg-brand-900/95">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-accent-500 text-brand-900 shadow-accent dark:bg-accent-500 dark:text-brand-900"
                            : "text-slate-700 hover:bg-slate-50 hover:text-brand-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-accent-300"
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
        </div>
      </header>
      <div className="h-[68px] sm:h-[72px]" aria-hidden="true" />
    </>
  );
}
