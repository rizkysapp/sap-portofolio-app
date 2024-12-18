import type { Metadata } from "next";
import { Anton, Josefin_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const josefin_Sans = Josefin_Sans({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Sap | Home",
  description: "Website Portfolio Sap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${josefin_Sans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
