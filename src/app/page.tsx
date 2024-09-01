import { api, HydrateClient } from "~/trpc/server";
// import Hero from "./(landing)/Hero";
import Hero2 from "./(landing)/waitlist-view";




export default async function Home() {

  return (
    <HydrateClient>    
      <main className="flex h-full flex-col background-color text-black">
       <Hero2 />
      </main>
    </HydrateClient>
  );
}
