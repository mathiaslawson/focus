import { api, HydrateClient } from "~/trpc/server";
import Hero from "./(landing)/Hero";
import Hero2 from "./(landing)/Hero2";




export default async function Home() {

  return (
    <HydrateClient>    
      <main className="flex min-h-screen flex-col background-color text-black">
       <Hero2 />
      </main>
    </HydrateClient>
  );
}
