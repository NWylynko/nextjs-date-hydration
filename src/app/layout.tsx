import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Plausible from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Date Hydration",
  description: "The different ways to render a date in React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Plausible
          domain="date-hydration.vercel.app"
          enabled={process.env.NODE_ENV === "production"}
        />
      </body>
    </html>
  );
}
