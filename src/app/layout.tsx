import LeftSidebar from "@/components/layout/LeftSidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RightSideBar from '../components/layout/RightSidebar';
import Toolbar from '../components/layout/Toolbar';
import Providers from '../lib/db/providers/index';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X-clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>𝕏</text></svg>"/>
      </head>
      <body className={inter.className}>
        <Providers>
        <div className="mx-auto flex min-h-screen flex-col bg-white lg:max-w-5xl">
          <MobileHeader/>
          <div className="flex flex-1 md:h-screen">
            <LeftSidebar />
            <main
            className="mt-14 w-full overflow-y-auto border-r border-gray-200 p-16 md:mt-0  md:w-1/2 md:pb-0 xl:w-3/5">
        {children}
        </main>
        <RightSideBar />
        </div>
        <Toolbar />

        </div>
        </Providers>
        
        </body>
    </html>
  );
}
