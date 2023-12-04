import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gustavo Iha',
  description: "Gustavo Iha's personal website. Full-Stack Software Engineer programming since 2013.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
