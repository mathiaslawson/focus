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
  description: "Are you tired of constant distractions when trying to focus on a specific task? Whether it's reading an article, learning a skill online, studying a PDF, or diving into any deep work, we’ve got you covered! We are excited to introduce our new web app designed to help you lock in and concentrate never before.",
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
        {/* <Providers> */}
        <ClerkProvider signInFallbackRedirectUrl="/app" signUpFallbackRedirectUrl="/app">
        
            <TRPCReactProvider>
              
              <Noisebackground />
            
               <Nav /> 
          {children}
          </TRPCReactProvider>
        </ClerkProvider>
        {/* </Providers>  */}
        
      </body>
    </html>
  );
}