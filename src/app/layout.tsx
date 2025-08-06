import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjivani - Modern Fullstack Platform",
  description:
    "A modern fullstack platform built with Next.js, TypeScript, and Tailwind CSS",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Fullstack"],
  authors: [{ name: "Sanjivani Team" }],
  openGraph: {
    title: "Sanjivani - Modern Fullstack Platform",
    description:
      "A modern fullstack platform built with Next.js, TypeScript, and Tailwind CSS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
