import "~/styles/Calendar.css";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import Link from "next/link";
import { Toaster } from "~/components/ui/sonner";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Peach Tree Racquet Club",
  description:
    "Schedule your next tennis match with us today at Peach Tree Racquet Club!",
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
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Peach Tree Racquet Club. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          className="text-xs underline-offset-2 hover:underline"
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs underline-offset-2 hover:underline"
          href="/privacy"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
