import NavbarBasketball from '@/components/basketball/NavbarBasketball'
import HeroBasketball from '@/components/basketball/HeroBasketball'
import ProgrammeBasketball from '@/components/basketball/ProgrammeBasketball'
import TarifsBasketball from '@/components/basketball/TarifsBasketball'
import InscriptionBasketball from '@/components/basketball/InscriptionBasketball'
import ContactBasketball from '@/components/basketball/ContactBasketball'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

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
