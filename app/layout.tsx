import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { NavigationMenuBar } from "./_component/navigationMenuBar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Notebook',
  description: 'Experience a new generation of notebook with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-center items-center overscroll-none p-5`}>
        <NavigationMenuBar />
        {children}
      </body>
    </html>
  );
}
