import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"


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
        <Analytics/>
      </body>
      
    </html>
  );
}
