import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import StickySearch from "@/components/sticky-search";
import { ChatProvider } from "@/contexts/chat-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Using Inter as the primary font (Geist alternative)
const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparsh — Developer Portfolio",
  description: "Modern developer portfolio with projects, writing, and a persistent bottom search.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${inter.variable} ${playfairDisplay.variable}`}>
      <body className="bg-base-50 text-base-900 antialiased">
        <ChatProvider>
          <main className="relative min-h-screen">{children}</main>
          {/* Bottom-centered floating search bar that persists across pages */}
          <StickySearch />
        </ChatProvider>
      </body>
    </html>
  );
}
