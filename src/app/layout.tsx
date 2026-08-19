import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ChatProvider } from "@/contexts/chat-context";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { TransitionProvider } from "@/contexts/transition-context";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparsh Sharma - AI Engineer",
  description: "Portfolio of Sparsh Sharma, AI Engineer and Developer.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${playfairDisplay.variable}`}>
      <body className="bg-base-50 text-base-900 dark:bg-base-900 dark:text-base-50 antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionProvider>
            <ChatProvider>
              <ThemeToggle />
              <main className="relative min-h-dvh">{children}</main>
            </ChatProvider>
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
