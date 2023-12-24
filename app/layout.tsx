import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'whzd',
  description: 'My website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="../public/img/favicon.ico" sizes="any" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
