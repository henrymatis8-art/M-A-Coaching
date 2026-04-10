import { Metadata } from 'next'
import NavbarBasketball from '@/components/basketball/NavBarBasketball'
import HeroBasketball from '@/components/basketball/HeroBasketball'
import ProgrammeBasketball from '@/components/basketball/ProgrammeBasketball'
import TarifsBasketball from '@/components/basketball/TarifsBasketball'
import InscriptionBasketball from '@/components/basketball/InscriptionBasketball'
import ContactBasketball from '@/components/basketball/ContactBasketball'
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

export default function BasketballPage() {
  return (
    <>
      <NavbarBasketball />
      <main>
        <HeroBasketball />
        <ProgrammeBasketball />
        <TarifsBasketball />
        <InscriptionBasketball />
        <ContactBasketball />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
