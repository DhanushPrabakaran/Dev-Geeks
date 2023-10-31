import './globals.css'
import type { Metadata } from 'next'
import {Russo_One} from 'next/font/google'
import { NextAuthProvider } from "@/components/provider"
const russo_One = Russo_One({
  weight:'400',
  subsets:["latin"],

})


export const metadata: Metadata = {
  title: 'Dev Home',
  description: 'a open website for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={russo_One.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
