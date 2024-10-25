import type { Metadata } from "next";
import { Sorts_Mill_Goudy } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const jetBrainsMono = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: [ "400"],
  variable: "--font-Sorts_Mill_Goudy",
});

export const metadata: Metadata = {
  title: "Casa-Nirvana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={jetBrainsMono.variable}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
