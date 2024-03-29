import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import pageConfig from "@/../page.config.json";

import Header from "@/components/header";
import { PageProvider } from "@/context/pageContext";

import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

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
      <body className={`${notoSerifSC.className} bg-background-image`}>
        <PageProvider config={pageConfig}>
          <Header />
          <main className="px-6 py-2 max-w-4xl">
            { children }
          </main>
        </PageProvider>
      </body>
    </html>
  );
}
