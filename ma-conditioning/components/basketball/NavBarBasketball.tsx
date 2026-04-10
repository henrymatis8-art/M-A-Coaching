'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'ACCUEIL', href: '#hero' },
  { label: 'PROGRAMME', href: '#programme' },
  { label: 'TARIFS', href: '#tarifs' },
  { label: 'INSCRIPTION', href: '#inscription' },
  { label: 'CONTACT', href: '#contact' },
]

export default function NavbarBasketball() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(10,14,26,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(230,57,70,0.2)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors duration-200" style={{ fontFamily: 'var(--font-barlow)' }}>
              ← M&A
            </a>
            <span className="text-white/20">|</span>
            <span className="font-bold text-2xl tracking-widest text-white uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
              <span style={{ color: '#E63946' }}>B</span>asketball
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm tracking-widest text-white/70 transition-colors duration-200 uppercase font-bold"
                style={{ fontFamily: 'var(--font-barlow)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E63946')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="mailto:coachalexandre2005@gmail.com"
            className="hidden lg:flex items-center gap-2 text-sm tracking-wider px-5 py-2.5 font-bold uppercase transition-colors duration-200"
            style={{ background: '#E63946', color: 'white', fontFamily: 'var(--font-barlow)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#E63946' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#E63946'; e.currentTarget.style.color = 'white' }}
          >
            coachalexandre2005@gmail.com
          </a>

          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: '#E63946' }} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-300"
        style={{
          background: 'rgba(10,14,26,0.98)',
          backdropFilter: 'blur(16px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => handleNav(l.href)}
            className="text-4xl tracking-widest text-white uppercase font-bold transition-colors duration-200"
            style={{ fontFamily: 'var(--font-barlow)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E63946')}
            onMouseLeave={e => (e.currentTarget.style.color = 'white')}
          >
            {l.label}
          </button>
        ))}
        <a
          href="mailto:coachalexandre2005@gmail.com"
          className="mt-4 text-lg tracking-wider border px-8 py-3 font-bold uppercase transition-colors duration-200"
          style={{ borderColor: '#E63946', color: '#E63946', fontFamily: 'var(--font-barlow)' }}
        >
          coachalexandre2005@gmail.com
        </a>
      </div>
    </>
  )
}
