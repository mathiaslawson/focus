import { api, HydrateClient } from "~/trpc/server";
import Hero from "./(landing)/Hero";




export default async function Home() {

  return (
    <HydrateClient>    
      <main className="flex min-h-screen flex-col items-center justify-center background-color text-black">
       <Hero />
      </main>
    </HydrateClient>
  );
}
