import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wine Tasting Coach",
  description: "Structured wine tasting, training and progress tracking.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
