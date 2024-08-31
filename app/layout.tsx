import type { Metadata } from "next";
import Navbar from "@/app/ui/navbar";
import { figtree } from "@/app/ui/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
