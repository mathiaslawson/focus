import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { 
  
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
   } from "@clerk/nextjs";

function Navbar() {
  return (
   <>

   <div className='flex flex-row justify-between items-center p-2'>
     <h1 className='text-2xl font-bold'>Focus</h1>
     <div> <ThemeSwitcher />
     <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn></div>

   

   </div>
    
    


   
   </>
  )
}

export default Navbar