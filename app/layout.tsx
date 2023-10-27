import './globals.css'
import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'
import { NextAuthProvider } from "@/components/provider";

const comic_neue =Comic_Neue(
  {
  weight: ['300' , '400' , '700' ],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  },
);
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
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
