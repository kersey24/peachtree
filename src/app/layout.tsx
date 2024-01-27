import "~/styles/Calendar.css";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import Link from "next/link";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Peach Tree Racquet Club",
  description: "Schedule your next tennis match with us today at Peach Tree Racquet Club!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Peach Tree Racquet Club. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-2" href="/terms">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-2" href="/privacy">
          Privacy
        </Link>
      </nav>
    </footer>
  )
}