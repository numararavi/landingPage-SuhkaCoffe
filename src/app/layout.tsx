import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Suhka Coffee | Ruang Produktif 24 Jam di Magelang",
  description:
    "Co-working space dan coffee shop 24 jam di jantung Kota Magelang.",
  openGraph: {
    title: "Suhka Coffee Magelang",
    description: "Kopi, ruang kerja, dan komunitas 24 jam.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
