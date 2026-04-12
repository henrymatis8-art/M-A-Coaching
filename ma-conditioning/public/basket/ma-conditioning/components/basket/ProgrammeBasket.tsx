'use client'
import { useInView } from 'react-intersection-observer'

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Sécurité Avant Tout',
    desc: 'Chaque exercice est adapté à l\'âge et au niveau de développement physique des 9–12 ans.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Explosivité & Vitesse',
    desc: 'Développer la puissance et la réactivité propres au basketball dès le jeune âge.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Esprit d\'Équipe',
    desc: 'Le basketball est un sport collectif. On développe autant le mental que le physique.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Progression Mesurée',
    desc: 'Évaluation hebdomadaire transmise aux parents. Chaque gain est documenté et visible.',
  },
]

export default function ProgrammeBasket() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="programme" className="relative bg-navy-light py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-[#E63946] uppercase block mb-3">Le programme</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Basketball Jeunesse
          </h2>
          <div className="w-16 h-0.5 bg-[#E63946] mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Un programme continu intensif conçu spécifiquement pour les jeunes de 9 à 12 ans.
            Six jours par semaine, on travaille le basketball et le développement physique complet
            dans un environnement structuré, bienveillant et encadré par des coachs expérimentés.
          </p>
        </div>

        {/* Coach highlight */}
        <div
          className={`relative border border-[#E63946]/30 bg-navy p-8 sm:p-12 mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <div className="font-display font-800 text-9xl text-[#E63946]/8 absolute top-4 right-8 leading-none select-none">A</div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-display text-xs tracking-[0.3em] text-[#E63946] uppercase block mb-3">Ton coach</span>
              <div className="font-display font-800 text-6xl text-[#E63946] mb-2 leading-none">A</div>
              <h3 className="font-display font-700 text-3xl uppercase tracking-wide text-white mb-1">Alexandre</h3>
              <p className="font-body text-sm text-[#00d4ff] mb-4 tracking-wide">Coach Basketball & Développement Physique</p>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                Coach de basketball et spécialiste du développement physique, Alexandre a lui-même
                vécu les conséquences d'une mauvaise formation jeune. Sa mission : que chaque jeune
                qu'il entraîne construise des bases solides, sans se blesser, en prenant du plaisir.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Discipline', value: 'Basketball & développement physique' },
                { label: 'Clientèle', value: 'Jeunes de 9 à 12 ans' },
                { label: 'Horaire', value: 'Lun–Ven 18h · Sam 12h' },
                { label: 'Lieu', value: 'Montréal — à confirmer' },
                { label: 'Saison', value: 'Juin · Juillet · Août 2025' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="font-display text-xs tracking-wider uppercase text-white/40">{item.label}</span>
                  <span className="font-body text-sm text-white/80">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule highlight */}
        <div
          className={`grid sm:grid-cols-2 gap-5 mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="border border-[#E63946]/30 bg-[#E63946]/5 p-7">
            <div className="text-[#E63946] mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-display font-700 text-xl uppercase tracking-wide text-white mb-2">Semaine</h4>
            <p className="font-display text-3xl font-800 text-[#E63946] mb-1">18h00</p>
            <p className="font-body text-white/50 text-sm">Lundi au Vendredi · 2 heures par session</p>
          </div>
          <div className="border border-[#00d4ff]/30 bg-[#00d4ff]/5 p-7">
            <div className="text-[#00d4ff] mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-display font-700 text-xl uppercase tracking-wide text-white mb-2">Samedi</h4>
            <p className="font-display text-3xl font-800 text-[#00d4ff] mb-1">12h00</p>
            <p className="font-body text-white/50 text-sm">Samedi · 2 heures · Session de fin de semaine</p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h2 className="font-display font-800 text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4">Notre Approche</h2>
          <div className="w-16 h-0.5 bg-[#E63946] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`p-6 border border-white/10 hover:border-[#E63946]/40 transition-all duration-500 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="text-[#E63946] mb-4 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
              <h4 className="font-display font-700 text-lg uppercase tracking-wide text-white mb-2">{v.title}</h4>
              <p className="font-body text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  )
}
