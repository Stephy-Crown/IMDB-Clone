"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "React Query App",
//   description: "All of what i need to know about React query app",
// };

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
