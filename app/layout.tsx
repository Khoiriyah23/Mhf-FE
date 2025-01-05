"use client";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/home/Navbar";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/register" ||
    pathname === "/login" ||
    pathname === "/forgot-password";

  const title = metadata.title?.toString() ?? "Default Title"; // Explicitly cast to string

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta
          name="description"
          content={metadata.description || "Default description"} // Fallback if description is null or undefined
        />
      </head>
      <body>
        {!isAuthPage && <Navbar />}
        <main
          style={{
            backgroundColor: "rgba(252, 255, 246, 0.97)",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
