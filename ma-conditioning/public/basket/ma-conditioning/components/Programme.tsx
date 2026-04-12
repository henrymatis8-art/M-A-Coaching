'use client'
import { useInView } from 'react-intersection-observer'

const coaches = [
  {
    initial: 'M',
    name: 'Matis',
    role: 'Coach Athlétisme & Sprint',
    color: 'text-cyan-brand',
    border: 'border-cyan-brand',
    description:
      'Spécialiste du sprint et de l'athlétisme, Matis apporte une expertise technique rigoureuse dans le développement de la vitesse, la biomécanique de la course et la prévention des blessures chez les jeunes athlètes.',
    disciplines: ['Sprint & vitesse', 'Technique de course', 'Mobilité dynamique', 'Prévention blessures'],
  },
  {
    initial: 'A',
    name: 'Alexandre',
    role: 'Coach Basketball & Développement Physique',
    color: 'text-[#E63946]',
    border: 'border-[#E63946]',
    description:
      'Coach de basketball et spécialiste du développement physique, Alexandre mise sur la force fonctionnelle, la coordination et la puissance explosive pour bâtir des athlètes complets et résilients.',
    disciplines: ['Développement physique', 'Force fonctionnelle', 'Coordination & agilité', 'Puissance explosive'],
  },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Sécurité Avant Tout',
    desc: 'Aucune progression ne vaut une blessure. On bâtit la fondation d'abord.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Développement Long Terme',
    desc: 'On pense carrière, pas résultat immédiat. Chaque session construit sur la précédente.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Pédagogie Active',
    desc: 'Les jeunes comprennent pourquoi ils font ce qu'ils font. La compréhension crée la discipline.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Bienveillance & Respect',
    desc: 'Un environnement où chaque jeune se sent en confiance pour progresser à son rythme.',
  },
]

export default function Programme() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="programme" className="relative bg-navy-light py-24 overflow-hidden">
      {/* Diagonal top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-cyan-brand uppercase block mb-3">Qui sommes-nous</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Notre Programme
          </h2>
          <div className="w-16 h-0.5 bg-cyan-brand mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            M&A Conditioning est né d'une expérience commune : deux frères, deux coachs, deux disciplines —
            et une conviction partagée que les jeunes méritent un encadrement honnête, sécuritaire et efficace.
          </p>
        </div>

        {/* Coaches */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {coaches.map((c, i) => (
            <div
              key={c.name}
              className={`relative border ${c.border}/30 bg-navy p-8 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Initial big */}
              <div className={`font-display font-800 text-8xl ${c.color} opacity-10 absolute top-4 right-6 leading-none select-none`}>
                {c.initial}
              </div>
              <div className={`font-display font-800 text-6xl ${c.color} mb-4 leading-none`}>{c.initial}</div>
              <h3 className="font-display font-700 text-2xl uppercase tracking-wide text-white mb-1">{c.name}</h3>
              <p className={`font-body text-sm ${c.color} mb-4 tracking-wide`}>{c.role}</p>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-6">{c.description}</p>
              <div className="flex flex-wrap gap-2">
                {c.disciplines.map((d) => (
                  <span key={d} className={`font-display text-xs tracking-wider uppercase px-3 py-1 border ${c.border}/30 ${c.color} bg-transparent`}>
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h2 className="font-display font-800 text-4xl sm:text-5xl uppercase tracking-tight text-white mb-4">
            Nos Valeurs
          </h2>
          <div className="w-16 h-0.5 bg-cyan-brand mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`p-6 border border-white/10 hover:border-cyan-brand/40 transition-all duration-500 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="text-cyan-brand mb-4 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
              <h4 className="font-display font-700 text-lg uppercase tracking-wide text-white mb-2">{v.title}</h4>
              <p className="font-body text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  )
}
