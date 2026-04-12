'use client'
import { useInView } from 'react-intersection-observer'

const blocs = [
  {
    month: 'Juin',
    phase: '01',
    title: 'Fondations',
    color: '#E63946',
    tagline: 'On bâtit la base',
    description:
      'Introduction au programme, évaluation initiale de chaque joueur. On établit les bases motrices, la posture athlétique et les patterns de mouvement fondamentaux au basketball.',
    focuses: [
      'Évaluation initiale complète',
      'Posture athlétique & équilibre',
      'Déplacements défensifs & offensifs',
      'Coordination balle-corps',
      'Introduction à la force fonctionnelle',
    ],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  },
  {
    month: 'Juillet',
    phase: '02',
    title: 'Développement',
    color: '#00d4ff',
    tagline: 'On monte en puissance',
    description:
      'Sur les bases de juin, juillet intensifie le conditionnement physique spécifique : explosivité, vitesse de réaction, endurance basket et force au poids du corps.',
    focuses: [
      'Explosivité & sauts verticaux',
      'Vitesse de réaction & agilité',
      'Endurance spécifique basketball',
      'Force au poids du corps',
      'Plyométrie adaptée 9–12 ans',
    ],
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80',
  },
  {
    month: 'Août',
    phase: '03',
    title: 'Performance',
    color: '#E63946',
    tagline: 'On applique tout',
    description:
      'Le bloc final met tout en application dans des situations de jeu réelles. Intensité maximale, simulations de match et bilan complet remis aux parents.',
    focuses: [
      'Application en situation de jeu',
      'Intensité & compétition encadrée',
      'Puissance maximale adaptée',
      'Bilan des 3 mois',
      'Rapport final aux parents',
    ],
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80',
  },
]

export default function BlocsBasket() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="blocs" className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute inset-0 track-lines opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-[#E63946] uppercase block mb-3">Structure du programme</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Les 3 Blocs
          </h2>
          <div className="w-16 h-0.5 bg-[#E63946] mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Programme continu sur 3 mois. Les inscriptions se font par bloc — tu peux commencer en juin, juillet ou août.
            Du lundi au samedi, 2 heures par session.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blocs.map((b, i) => (
            <div
              key={b.month}
              className={`relative border overflow-hidden group service-card transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                borderColor: `${b.color}30`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy/70" />
                <div className="absolute top-4 left-4 font-display font-800 text-6xl text-white/10 leading-none select-none">
                  {b.phase}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-display font-700 text-xs tracking-[0.3em] uppercase" style={{ color: b.color }}>
                    {b.tagline}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-navy-light">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display font-800 text-3xl" style={{ color: b.color }}>{b.month}</span>
                  <div className="flex-1 h-px" style={{ background: `${b.color}30` }} />
                </div>
                <h3 className="font-display font-800 text-2xl uppercase tracking-wide text-white mb-3">{b.title}</h3>
                <p className="font-body text-white/55 text-sm leading-relaxed mb-5">{b.description}</p>
                <div className="space-y-2">
                  {b.focuses.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-lg leading-none mt-0.5 flex-shrink-0" style={{ color: b.color }}>▸</span>
                      <span className="font-body text-white/70 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note évaluation */}
        <div className="mt-12 text-center">
          <div className="inline-block border border-[#E63946]/30 bg-[#E63946]/5 px-8 py-5 max-w-2xl">
            <p className="font-body text-white/70 text-sm leading-relaxed">
              <span className="text-[#E63946] font-600">À chaque fin de semaine :</span>{' '}
              évaluation des capacités physiques remise par courriel aux parents et à l'athlète, pour suivre la progression en temps réel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
