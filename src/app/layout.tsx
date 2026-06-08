import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Avi Mishra | Systems & OS Enthusiast",
  description: "Portfolio of Avi Mishra - AIR 888 @GATE CS26, Computer Science Student, and low-level programming enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 selection:text-emerald-200`}
      >
        {children}
      </body>
    </html>
  );
}
