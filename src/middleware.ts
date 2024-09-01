import { ClerkMiddlewareAuth, clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type UserMetadata = {
  isBetaUser?: boolean
  isAdmin?: boolean
}

export default clerkMiddleware((auth, req) => {
  const path = req.nextUrl.pathname;

  console.log(path);
  
  // Check if the current path should be protected
  if (path.startsWith('/app') || path.startsWith('/admin') || path.startsWith('/api')) {
    auth().protect()
    
    // 👉 Use `auth()` to get the sessionClaims, which includes the public metadata
    const { sessionClaims } = auth()
    const { isAdmin, isBetaUser } = sessionClaims?.metadata as UserMetadata
    
    if(isAdmin) {
      // 👉 If the user is an admin, let them proceed to anything
      return
    }
    
    if(!isAdmin && path.startsWith('/admin')) {
      // 👉 If the user is not an admin and they try to access the admin panel, return an error
      return NextResponse.error()
    }
    
    if(!isBetaUser) {
      // 👉 If the user is not an admin and not a beta user, redirect them to the waitlist
      return NextResponse.redirect(new URL('/waitlist', req.url))
    }
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};