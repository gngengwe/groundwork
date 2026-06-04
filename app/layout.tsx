import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Groundwork — The gym should come with instructions.',
  description:
    'A simplicity-first fitness system for people who want to stop guessing, build confidence, and finally stay consistent at the gym.',
  metadataBase: new URL('https://groundwork.ngengwe.com'),
  openGraph: {
    title: 'Groundwork — The gym should come with instructions.',
    description:
      'A simplicity-first fitness system for people who want to stop guessing, build confidence, and finally stay consistent at the gym.',
    url: 'https://groundwork.ngengwe.com',
    siteName: 'Groundwork',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groundwork — The gym should come with instructions.',
    description:
      'A simplicity-first fitness system for people who want to stop guessing, build confidence, and finally stay consistent at the gym.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
