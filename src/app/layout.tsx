import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MrLoLCat TV - Streaming Video",
  description: "Platform streaming video terbaik dari MrLoLCat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
