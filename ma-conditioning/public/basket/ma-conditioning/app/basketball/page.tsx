import type { Metadata } from 'next'
import NavbarBasket from '@/components/basket/NavbarBasket'
import HeroBasket from '@/components/basket/HeroBasket'
import ProgrammeBasket from '@/components/basket/ProgrammeBasket'
import BlocsBasket from '@/components/basket/BlocsBasket'
import TarifsBasket from '@/components/basket/TarifsBasket'
import InscriptionBasket from '@/components/basket/InscriptionBasket'
import ContactBasket from '@/components/basket/ContactBasket'
import FooterBasket from '@/components/basket/FooterBasket'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Programme Basketball — M&A Conditioning | Montréal',
  description:
    'Programme de basketball et développement physique pour jeunes de 9 à 12 ans. 6 jours par semaine. Montréal — Été 2025.',
}

export default function BasketballPage() {
  return (
    <>
      <NavbarBasket />
      <main>
        <HeroBasket />
        <ProgrammeBasket />
        <BlocsBasket />
        <TarifsBasket />
        <InscriptionBasket />
        <ContactBasket />
      </main>
      <FooterBasket />
      <BackToTop />
    </>
  )
}
