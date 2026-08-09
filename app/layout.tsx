import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayesha Arshad Khan | Marketing & Graphic Design Portfolio",
  description: "Digital Marketing • Branding • Graphic Design. Where creativity meets strategy.",
  keywords: ["Ayesha Arshad Khan", "Digital Marketing", "Branding", "Graphic Design", "Marketing Portfolio"],
  authors: [{ name: "Ayesha Arshad Khan" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#f7f4ed] text-[#201a18] selection:bg-[#ee4b56] selection:text-white">
        {children}
      </body>
    </html>
  );
}

