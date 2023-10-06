import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJs Image gallery",
  description: "Image galley app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto"></main>
        {children}
      </body>
    </html>
  );
}
