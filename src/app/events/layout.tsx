import "~/styles/Calendar.css";
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/app/_components/header";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Peach Tree Racquet Club - Events",
  description: "Schedule your next event at Peach Tree Racquet Club and enjoy the best tennis courts in the Western North Carolina area!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`font-sans ${inter.variable}`}>
      <Header />
      {children}
    </div>
  );
}
