import pageConfig from '@page'

import type { Metadata } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import { PageProvider } from '@/context/pageContext'

import './globals.css'

const notoSerifSC = Noto_Serif_SC({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hans-CN">
      <body className={`${notoSerifSC.className}`}>
        <PageProvider config={pageConfig}>
          <main>{children}</main>
        </PageProvider>
      </body>
    </html>
  )
}
