import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { 
  ClerkProvider, 
 } from "@clerk/nextjs";

 export const metadata = {
  title: "Focus",
  description: "Built by mathias",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { Providers } from "~/providers";
import Navbar from "./_components/navbar";




export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
        <ClerkProvider>
        <TRPCReactProvider>
        <Navbar />
          {children}
          </TRPCReactProvider>
        </ClerkProvider>
        </Providers> 
      </body>
    </html>
  );
}
