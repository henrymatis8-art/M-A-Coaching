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
  title: 'M&A Conditioning — Développement Physique Jeunesse | Montréal',
  description:
    'Programme de conditionnement physique pour jeunes de 8 à 20 ans. Athlétisme, sprint, basketball et développement physique. Montréal — Été 2025.',
  keywords: ['conditionnement physique', 'jeunes', 'Montréal', 'athlétisme', 'sprint', 'basketball', 'programme sportif'],
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
