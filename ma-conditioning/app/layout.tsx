import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'M&A Conditioning — Conditionnement physique jeunesse à Montréal',
  description:
    'M&A Conditioning propose un programme de conditionnement physique pour jeunes de 8 à 20 ans à Montréal. Athlétisme, sprint, basketball, préparation sportive et développement physique.',
  keywords: [
    'conditionnement physique',
    'entraînement sportif',
    'athlétisme Montréal',
    'sprint Montréal',
    'basketball Montréal',
    'programme jeunesse',
    'préparation physique',
    'coaching sportif',
    'jeunes athlètes',
    'performance sportive',
  ],
  authors: [{ name: 'M&A Conditioning' }],
  metadataBase: new URL('https://m-a-conditioning'),
  openGraph: {
    title: 'M&A Conditioning — Conditionnement physique jeunesse à Montréal',
    description:
      'M&A Conditioning propose un programme de conditionnement physique pour jeunes de 8 à 20 ans à Montréal. Athlétisme, sprint, basketball, préparation sportive et développement physique.',
    type: 'website',
    siteName: 'M&A Conditioning',
    images: [
      {
        url: '/logo%20png.png',
        alt: 'M&A Conditioning logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M&A Conditioning — Conditionnement physique jeunesse à Montréal',
    description:
      'M&A Conditioning propose un programme de conditionnement physique pour jeunes de 8 à 20 ans à Montréal. Athlétisme, sprint, basketball, préparation sportive et développement physique.',
    images: ['/logo%20png.png'],
  },
  icons: {
    icon: '/logo noir.png',
    shortcut: '/logo noir.png',
    apple: '/logo noir.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${barlow.variable} ${dmSans.variable} bg-navy text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
