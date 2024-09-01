import React from 'react';
import Noisebackground from '../_components/Noisebackground';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import graphic from '../../../public/assets/images/waitlist/graphic.gif'
import think from '../../../public/assets/images/waitlist/think.gif'
import cloud from '../../../public/assets/images/waitlist/cloud.gif'
import Image from 'next/image';

export default function WaitListView() {
    return (
        <>
            <div className='flex justify-center sm:mb-0 mb-20'> 
                
            <div className="relative z-10 flex flex-col justify-center w-100% gap-2  sm:pt-[80px] pt-[100px] px-10 w-[80rem]">
                {/* Paragraph */}
                <div className='grid gap-5'>
                    
                <div className='bg-[#fdd9b7] rounded-xl p-9 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-neutral-700 font-extrabold w-full h-full py-13' >
                    <p className='text-center text-3xl'>Join our waitlist</p>
                    
                    <p className='text-center mt-10 font-semibold'>Sign Up to get early access to our product and be the first to know about new features and updates.</p>

                    <div className='text-center mt-10'>
                        <Link href='/app'>
                            <Button className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white text-black hover:bg-neutral-100'>Get Started</Button>
                        </Link>
                    </div>
                </div>    

                </div>
                

                    <div className='grid grid-cols-9 gap-2'>
                        



                <div className='sm:col-span-3 col-span-12'>
                            <div className='bg-[#fdd9b7] rounded-xl p-9 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-neutral-600 font-semibold w-full h-full py-10' >
                    <div className='flex justify-center h-[160px]'>
                                    <Image src={graphic.src} alt="waitlist" className='' width={200} height={200}  />
                    </div>
                
                                 <p className='text-center text-2xl mt-5'>Lock-in</p>
                    
                    <p className='font-light text-center mt-10'>Get ready to expereince a new level of deep work and learning, whiles keeping your focus on your tasks.</p>

                    
                </div>    
                </div> 
                        





                <div className='sm:col-span-3 col-span-12'>
                            <div className='bg-[#fdd9b7] rounded-xl p-0 px-7 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-neutral-600 font-semibold w-full h-full py-13' >
                                  <div className='flex justify-center h-[200px]'>
                                    <Image src={think.src} alt="waitlist" className='' width={200} height={200}  />
                    </div>
                    <p className='text-center text-2xl mt-5'>Time Bound</p>
                    
                    <p className='font-light text-center mt-10'>Get every time you spend on a specific goal accounted for and managed in a way that suits you.</p>

                  
                </div>    
                        </div> 
                        




                 <div className='sm:col-span-3 col-span-12'>
                      <div className='bg-[#fdd9b7] rounded-xl p-9 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-neutral-600 font-semibold w-full h-full py-13' >
                    <div className='flex justify-center h-[160px]'>
                                    <Image src={cloud.src} alt="waitlist" className='' width={200} height={200}  />
                    </div>
                     <p className='text-center text-2xl mt-5'>Dynamic Tools</p>
                    
                    <p className='font-light text-center mt-10'>Access a wide range of AI powered widgets to aid your learning and productivity.</p>

                   
                </div>    
                </div> 
                        
            </div>

              

            
            </div>
          </div>
        </>
    );
}