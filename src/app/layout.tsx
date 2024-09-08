import HeaderBar from "@/components/headerBar/HeaderBar";
import NavPath from "@/components/headerBar/NavPath";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ColorThemeProvider from "./_provider/ColorThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calendar-app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="text-primary" lang="fr" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background")}>
        <ColorThemeProvider>
          <div className="flex">
            <Navbar />
            <div className="w-full">
              <div className="w-full divide-y-2 divide-muted">
                <HeaderBar />
                <NavPath />
              </div>
              <div className="w-full p-2">{children}</div>
            </div>
          </div>
        </ColorThemeProvider>
      </body>
    </html>
  );
}
