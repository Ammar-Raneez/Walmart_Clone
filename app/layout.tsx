import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Walmart Clone",
  description: "Walmart Clone is a web application built using Next.js, Oxylabs, Shadcn, and Zustand.",
  keywords: ["Walmart Clone", "Next.js", "Oxylabs", "Shadcn", "Zustand", "Walmart website", "ecommerce", "shopping"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
