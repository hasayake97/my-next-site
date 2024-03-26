import type { Metadata } from "next";
import { Inter } from "next/font/google";
import pageConfig from "@/../page.config.json";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { PageProvider } from "@/context/pageContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: pageConfig.title,
  description: "blog unot.net hasayake.luo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans-CN">
      <body className={`${inter.className} bg-background-image`}>
        <PageProvider config={pageConfig}>
          <Header />
          <main className="px-6 py-2">
            { children }
          </main>
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
