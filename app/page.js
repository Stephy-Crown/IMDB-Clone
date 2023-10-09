import Link from "next/link";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SuperHeroesPage from "./super-heroes/page";
import RQSuperHeroesPage from "./RQSuperHeroes/page";

// const queryClient = new QueryClient();
export default function Home() {
  return (
    // <QueryClientProvider client={queryClient}>
    <main className=" ">
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="bg-red-500">
              <Link href="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link href="/RQSuperHeroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <SuperHeroesPage />
        <RQSuperHeroesPage />
      </div>
    </main>
    // </QueryClientProvider>
  );
}
