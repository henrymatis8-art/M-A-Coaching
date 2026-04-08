import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Programme from '@/components/Programme'
import Blocs from '@/components/Blocs'
import Tarifs from '@/components/Tarifs'
import Inscription from '@/components/Inscription'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'M&A Conditioning — Conditionnement physique jeunesse à Montréal',
  description:
    'M&A Conditioning propose un programme complet de conditionnement physique pour jeunes de 8 à 20 ans à Montréal. Athlétisme, sprint, basketball et développement sportif.',
  keywords: [
    'conditionnement physique',
    'entraînement sportif',
    'athlétisme Montréal',
    'sprint Montréal',
    'basketball Montréal',
    'programme jeunesse',
    'coaching sportif',
    'préparation physique',
  ],
  openGraph: {
    title: 'M&A Conditioning — Conditionnement physique jeunesse à Montréal',
    description:
      'M&A Conditioning propose un programme complet de conditionnement physique pour jeunes de 8 à 20 ans à Montréal. Athlétisme, sprint, basketball et développement sportif.',
    type: 'website',
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
      'M&A Conditioning propose un programme complet de conditionnement physique pour jeunes de 8 à 20 ans à Montréal. Athlétisme, sprint, basketball et développement sportif.',
    images: ['/logo%20png.png'],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programme />
        <Blocs />
        <Tarifs />
        <Inscription />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
