import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function Nav() {
  return (
    <section className="absolute z-50 flex justify-between items-center w-full h-16 py-2 px-20">
         
      <div className=''>
        <div>
          <Link href='/'>
             <h3 className='text-3xl text-neutral-600 font-bold'>Focus</h3></Link>
        </div>
   
    
      </div>
      
      <Button className='bg-white text-black hover:bg-neutral-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
           <div className='flex justify-between items-center' >
{/*       
        <div className='mx-5'>
            <ThemeSwitcher />
        </div> */}
        <div>
      
         <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
         </div>

   </Button>
      </section>
  );
}