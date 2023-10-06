import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

// ! After 1h get new data (because nestJs saves results on the cache)
export const revalidate = 10;

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
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
