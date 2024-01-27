import { ConvexClientProvider } from "@/components/ui/providers/convex-provider";
import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "Tool to increase your productivity and take awesome notes ",
  icons : {
    icon : [
     {
     media :"(prefers-color-scheme: light)",
     url : "/logo.svg",
     href : "/logo.svg"
     },
     {
      media :"(prefers-color-scheme: dark)",
      url : "/logo-dark.svg",
      href : "/logo-dark.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme = "system"
        enableSystem
        disableTransitionOnChange
        storageKey = "jotion-theme-2">
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  );
}



