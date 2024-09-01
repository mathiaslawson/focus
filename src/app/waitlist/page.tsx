import { api, HydrateClient } from "~/trpc/server";

import Link from "next/link";
import dance from '../../../public/assets/images/waitlist/dance.gif'
import Image from "next/image";

export default async function Home() {

  return (
   
        <section className="relative z-10 flex justify-center items-center w-100% gap-[3em]  pt-[0px] h-[100svh]">
               
         <div className='bg-[#fdd9b7] rounded-xl p-9 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-neutral-600 font-semibold w-[600px] h-[full] py-10' >
                    <div className='flex justify-center h-[160px]'>
                                    <Image src={dance.src} alt="waitlist" className='' width={150} height={200}  />
                    </div>
                    <p className='text-neutral-600 text-center mt-10 w-[full] font-semibold'>You have been successfully added to the waitlist. You will be notified when we launch our product. Good Day!</p>

                   
                </div>  
        </section>
   
  );
}
