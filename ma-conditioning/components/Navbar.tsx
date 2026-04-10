'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const links = [
  { label: 'ACCUEIL', href: '#hero' },
  { label: 'PROGRAMME', href: '#programme' },
  { label: 'BLOCS', href: '#blocs' },
  { label: 'TARIFS', href: '#tarifs' },
  { label: 'INSCRIPTION', href: '#inscription' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md border-b border-cyan-brand/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-3 group"
          >
            <span className="sr-only">M&A Conditioning</span>
            <div className="relative w-28 h-8 md:w-56 md:h-16">
              <Image
                src="/logo complet bleu.png"
                alt="M&A Conditioning"
                fill
                className="object-contain"
              />
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="font-display text-sm tracking-widest text-white/70 hover:text-cyan-brand transition-colors duration-200 uppercase"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:5147098609"
            className="hidden lg:flex items-center gap-2 bg-cyan-brand text-navy font-display font-700 text-sm tracking-wider px-5 py-2.5 hover:bg-white transition-colors duration-200 uppercase"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            514-709-8609
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cyan-brand transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => handleNav(l.href)}
            className="font-display font-700 text-4xl tracking-widest text-white hover:text-cyan-brand transition-colors duration-200 uppercase"
          >
            {l.label}
          </button>
        ))}
        <a
          href="tel:5147098609"
          className="mt-4 font-display font-700 text-lg tracking-wider text-cyan-brand border border-cyan-brand px-8 py-3 hover:bg-cyan-brand hover:text-navy transition-colors duration-200 uppercase"
        >
          514-709-8609
        </a>
      </div>
    </>
  )
}
