'use client'
import { useEffect, useState } from 'react'

export default function HeroBasketball() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image — basketball court */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&q=80')`,
          transform: 'scale(1.1)',
        }}
      />
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-[#0a0e1a]/80" />
      {/* Red gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/10 via-transparent to-[#457B9D]/10" />
      {/* Track lines motif */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(230, 57, 70, 0.06) 8px,
            rgba(230, 57, 70, 0.06) 10px
          )`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0e1a] to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-5 max-w-5xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-[#E63946]" />
          <span className="text-[#E63946] uppercase tracking-[0.35em] text-xs font-bold">
            Montréal — 514-709-8609
          </span>
          <span className="w-8 h-px bg-[#E63946]" />
        </div>

        {/* Badge */}
        <div className="inline-block border border-[#E63946]/40 bg-[#E63946]/10 px-4 py-1.5 mb-6">
          <span className="text-[#E63946] text-xs uppercase tracking-widest font-bold">
            Programme Basketball
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="leading-none uppercase mb-6"
          style={{ fontFamily: 'var(--font-barlow), sans-serif', fontWeight: 800 }}
        >
          <span className="block text-5xl sm:text-7xl lg:text-9xl text-[#E63946] tracking-tight">
            M&A
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-white tracking-widest mt-2">
            Basketball
          </span>
        </h1>

        {/* Subline */}
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
          Programme de développement basketball pour jeunes de{' '}
          <span className="text-white font-semibold">9 à 12 ans</span>
        </p>
        <p className="text-white/50 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
          Fondamentaux · Développement physique · Mentalité compétitive
          <br />
          <span style={{ color: '#457B9D' }}>Montréal — Été 2025 · Juin / Juillet / Août</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#inscription"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#inscription')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-sm uppercase tracking-[0.2em] font-bold px-10 py-4 transition-colors duration-200 w-full sm:w-auto text-center"
            style={{ background: '#E63946', color: 'white' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#fff', e.currentTarget.style.color = '#E63946')}
            onMouseLeave={e => (e.currentTarget.style.background = '#E63946', e.currentTarget.style.color = '#fff')}
          >
            S&apos;inscrire maintenant
          </a>
          <a
            href="#programme"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#programme')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-sm uppercase tracking-[0.2em] font-bold border px-10 py-4 transition-colors duration-200 w-full sm:w-auto text-center"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#E63946'; e.currentTarget.style.color = '#E63946' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'white' }}
          >
            Notre programme
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 border-t border-white/10 pt-8">
          {[
            { num: '9–12', label: 'Ans' },
            { num: '6x', label: 'Par semaine' },
            { num: '2h', label: 'Semaine (18h)' },
            { num: '2h', label: 'Samedi (12h)' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#E63946', fontFamily: 'var(--font-barlow)' }}>{s.num}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/30 uppercase tracking-widest">Défiler</span>
        <svg className="w-4 h-4" style={{ color: '#E63946' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
