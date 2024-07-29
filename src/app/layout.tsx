import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { 
  ClerkProvider, 
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
 } from "@clerk/nextjs";

 export const metadata = {
  title: "Focus",
  description: "Built by mathias",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { Providers } from "~/providers";




export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
        <ClerkProvider>
        <TRPCReactProvider>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
          {children}</TRPCReactProvider>
        </ClerkProvider>
        </Providers> 
      </body>
    </html>
  );
}
