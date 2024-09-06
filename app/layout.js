import './globals.css'
import { Roboto, Inter, Preahvihear } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const preavihear = Preahvihear({ subsets: ['khmer'], weight: '400' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DidacDev - Web Developer Portfolio',
  description: 'Showcasing the portfolio of DCG, a skilled web developer specializing in modern web technologies.',
  keywords: 'web developer, portfolio, Diego, Didac, JavaScript, React, Next.js, dev, tech',
  openGraph: {
    title: 'DidacDev - Web Developer Portfolio',
    description: 'Showcasing the portfolio of DidacDev, a skilled web developer specializing in modern web technologies.',
    url: 'https://yourwebsite.com',
    type: 'website',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'DCG Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    title: 'DCG - Web Developer Portfolio',
    description: 'Showcasing the portfolio of DCG, a skilled web developer specializing in modern web technologies.',
    image: 'https://yourwebsite.com/twitter-image.jpg',
  },
};


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
