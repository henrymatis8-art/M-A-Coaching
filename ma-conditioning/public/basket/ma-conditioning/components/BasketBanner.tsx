'use client'
import Link from 'next/link'

export default function BasketBanner() {
  return (
    <section className="relative bg-navy-light py-20 overflow-hidden">
      <div className="absolute inset-0 track-lines opacity-20" />
      {/* Red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(230,57,70,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-5 text-center">
        <span className="font-display text-xs tracking-[0.4em] text-[#E63946] uppercase block mb-3">Nouveau programme</span>
        <h2 className="font-display font-800 text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
          Programme <span className="text-[#E63946]">Basketball</span>
        </h2>
        <div className="w-16 h-0.5 bg-[#E63946] mx-auto mb-6" />
        <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-10">
          Coaching basketball et développement physique pour les jeunes de{' '}
          <span className="text-white font-600">9 à 12 ans</span>.
          Du lundi au samedi — 6 sessions par semaine.
          <br />
          <span className="text-[#E63946]/80">Montréal — Été 2025</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/basketball"
            className="font-display font-700 text-sm tracking-[0.2em] uppercase bg-[#E63946] text-white px-12 py-4 hover:bg-white hover:text-navy transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Voir le programme basketball →
          </Link>
          <div className="flex items-center gap-6">
            {[
              { num: '9–12', label: 'Ans' },
              { num: '6x', label: 'Semaine' },
              { num: '2h', label: 'Session' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-800 text-2xl text-[#E63946]">{s.num}</div>
                <div className="font-body text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
