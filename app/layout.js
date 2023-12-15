import './globals.css'
import { Roboto, Inter, Preahvihear } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const preavihear = Preahvihear({ subsets: ['khmer'], weight: '400' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DCG',
  description: 'Web developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={preavihear.className}>{children}</body>
    </html>
  )
}
