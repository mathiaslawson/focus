"use client"
import { useUser } from "@clerk/nextjs";


export default function Hero() {
 

  const {isLoaded, isSignedIn, user} = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user)
 
  
  
  return (
    <>
      
      <main className="flex min-h-screen flex-col items-center justify-center background-color text-black">
      <div>Hello, {user.fullName} </div>
      <h2>Hello from the landing page</h2>

      </main>
    </>
  );
}
