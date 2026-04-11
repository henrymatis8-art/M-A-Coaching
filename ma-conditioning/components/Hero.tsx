'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/banner.png')`,
          transform: 'scale(1.1)',
        }}
      />
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-navy/75" />
      {/* Track lines motif */}
      <div className="absolute inset-0 track-lines opacity-60" />
      {/* Cyan gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-5 max-w-5xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-cyan-brand" />
          <span className="font-display text-xs tracking-[0.35em] text-cyan-brand uppercase">
            Montréal — coachalexandre2005@gmail.com
          </span>
          <span className="w-8 h-px bg-cyan-brand" />
        </div>

        {/* Main headline */}
        <h1 className="font-display font-800 leading-none uppercase mb-6">
          <span className="block text-5xl sm:text-7xl lg:text-9xl text-cyan-brand tracking-tight">
            M&A
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-white tracking-widest mt-2">
            Conditioning
          </span>
        </h1>

        {/* Subline */}
        <p className="font-body text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
          Programme de développement physique pour jeunes de{' '}
          <span className="text-white font-600">13 à 19 ans</span>
        </p>
        <p className="font-body text-white/50 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
          Athlétisme · Sprint · Basketball · Conditionnement physique
          <br />
          <span className="text-cyan-brand/80">Complexe sportif Claude-Robillard -Montréal — Été 2026 · Juin / Juillet / Août</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#inscription"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#inscription')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-display font-700 text-sm tracking-[0.2em] uppercase bg-cyan-brand text-navy px-10 py-4 hover:bg-white transition-colors duration-200 w-full sm:w-auto text-center"
          >
            S&apos;inscrire maintenant
          </a>
          <Link
            href="/basketball"
            className="font-display font-700 text-sm tracking-[0.2em] uppercase border border-white/40 text-red-500 px-10 py-4 hover:border-cyan-brand hover:text-white hover:bg-red-500 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Programme de Basketball
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 border-t border-white/10 pt-8">
          {[
            { num: '8–20', label: 'Ans' },
            { num: '2h', label: 'Par session' },
            { num: '5x', label: 'Par semaine' },
            { num: '3', label: 'Blocs disponibles' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-800 text-3xl text-cyan-brand">{s.num}</div>
              <div className="font-body text-xs text-white/50 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-white/30 uppercase tracking-widest">Défiler</span>
        <svg className="w-4 h-4 text-cyan-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
