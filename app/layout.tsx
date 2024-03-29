import { Inter, Staatliches, Mooli, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


export const mooli = Mooli({
  subsets: ['latin'],
  weight: '400'
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const staatliches = Staatliches({
  subsets: ['latin'],
  weight: '400'
})
