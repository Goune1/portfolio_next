import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "Goune's portfolio",
  description: "Here's the beautiful goune's portfolio, a web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={GeistSans.className}>
      <body>
        <main>{children}</main>
        <Toaster/>
      </body>
      
    </html>
  );
}
