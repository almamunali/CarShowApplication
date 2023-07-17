
import './globals.css'
import type { Metadata } from 'next'
import { Footer,NavBar } from '@/components'



export const metadata: Metadata = {
  title: 'Car Hub',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}</body>
        <Footer/>
    </html>
  )
}
