import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Programme from '@/components/Programme'
import Blocs from '@/components/Blocs'
import Tarifs from '@/components/Tarifs'
import Inscription from '@/components/Inscription'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

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
