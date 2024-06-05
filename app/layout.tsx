import type { Metadata } from "next";
import { roboto } from './ui/fonts'
import "./globals.css";
import { Footer, Header } from "./components";
import { ThemeProvider } from "./context/ThemeContext";

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
        <ThemeProvider>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
