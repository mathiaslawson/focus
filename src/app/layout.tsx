import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Nav from './_components/Nav'

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
import Noisebackground from "./_components/Noisebackground";




export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
        <ClerkProvider signInFallbackRedirectUrl="/app" signUpFallbackRedirectUrl="/app">
        
            <TRPCReactProvider>
              
              <Noisebackground />
            
               <Nav /> 
          {children}
          </TRPCReactProvider>
        </ClerkProvider>
        </Providers> 
        
      </body>
    </html>
  );
}