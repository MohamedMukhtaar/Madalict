import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madalict.com"),
  title: {
    default: "Madal ICT",
    template: "%s | Madal ICT",
  },
  description:
    "Madal ICT Solutions builds branded websites, business systems, and mobile-ready digital tools for organizations that want to look trustworthy and grow faster.",
  applicationName: "Madal ICT Solutions",
  keywords: [
    "Madal ICT Solutions",
    "web development Somalia",
    "custom business systems",
    "mobile app development",
    "ICT consulting",
    "digital transformation",
  ],
  // Icons and the share image come from the app/ file conventions:
  // app/icon.svg, app/apple-icon.png, app/opengraph-image.png
  openGraph: {
    title: "Madal ICT Solutions",
    description:
      "Professional websites, custom systems, and digital products designed for growth-focused organizations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madal ICT Solutions",
    description:
      "Professional websites, custom systems, and digital products designed for growth-focused organizations.",
  },
};

const themeScript = `(() => {
  const storageKey = "madal-theme";
  const root = document.documentElement;
  const savedTheme = localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemPrefersDark ? "dark" : "light";
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-brand-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-brand-900 dark:text-slate-100`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
