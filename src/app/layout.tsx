import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getData } from "@/data/data";
import "./globals.css";
import Providers from "./providers";

config.autoAddCss = false;
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const data = getData();
const title = `${data.name} | ${data.jobTitle} & Platform Engineering`;

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: { default: title, template: `%s | ${data.name}` },
  description: data.description,
  authors: [{ name: data.name, url: data.url }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: data.url,
    siteName: data.name,
    title,
    description: data.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: data.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#101610" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={fontMono.variable} suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
