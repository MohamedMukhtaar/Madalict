import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/brand.png",
  },
  openGraph: {
    title: "Madal ICT Solutions",
    description:
      "Professional websites, custom systems, and digital products designed for growth-focused organizations.",
    images: ["/brand.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madal ICT Solutions",
    description:
      "Professional websites, custom systems, and digital products designed for growth-focused organizations.",
    images: ["/brand.png"],
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
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-slate-50 text-slate-900 antialiased transition-colors duration-300 dark:bg-brand-900 dark:text-slate-100`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
