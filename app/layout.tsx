import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayesha Arshad Khan | Marketing & Design Portfolio",
  description: "Digital Marketing • Branding • Graphic Design. Where creativity meets strategy.",
  keywords: ["Ayesha Arshad Khan", "Digital Marketing", "Branding", "Graphic Design", "Marketing Portfolio", "Social Media Manager"],
  authors: [{ name: "Ayesha Arshad Khan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f7f4ed] text-[#201a18] selection:bg-[#ee4b56] selection:text-white">
        {children}
      </body>
    </html>
  );
}

