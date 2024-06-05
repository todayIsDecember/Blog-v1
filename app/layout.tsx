import type { Metadata } from "next";
import { roboto } from './ui/fonts'
import "./globals.css";
import { Footer, Header } from "./components";

export const metadata: Metadata = {
  title: "Resume",
  description: "maded by Roman Tymkiv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
