import { SignUp } from '@clerk/nextjs'
import React from 'react'


function SignUpPage() {
  return (
    <div className='flex flex-col items-center gap-4'>
   
          <p>While Cooking with Clerk is being developed, users will be placed on a waitlist and be notified when they are allowed to test out the app!</p>
          <p>This is to temporarily limit the use of OpenAIs APIs and prevent overages.</p>
      
      <SignUp />
    </div>
  )
}

export default SignUpPage