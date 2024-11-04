"use client";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { NavProvider } from "@/components/Navbar/NavContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="overflow-x-hidden overflow-y-auto mainGradientBackground">
        <NavProvider>
          <Navbar />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
