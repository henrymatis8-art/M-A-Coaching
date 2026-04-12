'use client'
import { useInView } from 'react-intersection-observer'

const blocs = [
  {
    month: 'Juin',
    phase: '01',
    title: 'Fondations',
    color: 'border-cyan-brand text-cyan-brand',
    accent: '#00d4ff',
    tagline: 'On bâtit la base',
    description:
      'Ce bloc est entièrement dédié à construire une fondation athlétique solide. Posture, activation musculaire, patterns de mouvement fondamentaux et évaluation initiale de chaque athlète.',
    focuses: [
      'Évaluation initiale complète',
      'Posture & alignement corporel',
      'Activation musculaire profonde',
      'Mobilité & flexibilité fonctionnelle',
      'Introduction aux mouvements fondamentaux',
    ],
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
  },
  {
    month: 'Juillet',
    phase: '02',
    title: 'Développement',
    color: 'border-[#E63946] text-[#E63946]',
    accent: '#E63946',
    tagline: 'On monte en puissance',
    description:
      'Sur les bases construites en juin, juillet intensifie : force relative au poids du corps, endurance spécifique, vitesse et coordination. Le jeune commence à ressentir sa progression.',
    focuses: [
      'Force au poids du corps progressif',
      'Endurance cardiovasculaire',
      'Vitesse & explosivité',
      'Coordination & agilité avancée',
      'Plyométrie adaptée à l\'âge',
    ],
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
  },
  {
    month: 'Août',
    phase: '03',
    title: 'Performance',
    color: 'border-[#457B9D] text-[#457B9D]',
    accent: '#457B9D',
    tagline: 'On applique tout',
    description:
      'Le bloc final met tout en application dans le contexte sportif de chaque jeune. Puissance maximale, simulation sportive et bilan final avec rapport remis aux parents.',
    focuses: [
      'Application sport-spécifique',
      'Puissance & explosivité maximale',
      'Simulation compétitive',
      'Bilan des 3 mois de progression',
      'Rapport final remis aux parents',
    ],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
  },
]

export default function Blocs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="blocs" className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute inset-0 track-lines opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-cyan-brand uppercase block mb-3">Structure du programme</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Les 3 Blocs
          </h2>
          <div className="w-16 h-0.5 bg-cyan-brand mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Chaque bloc dure un mois, du lundi au vendredi, 2 heures par session.
            Les inscriptions se font par bloc — tu peux commencer en juin, juillet ou août.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blocs.map((b, i) => (
            <div
              key={b.month}
              className={`relative border ${b.color.split(' ')[0]}/30 overflow-hidden group transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } service-card`}
              style={{ transitionDelay: `${i * 150}ms` }}
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
                  <span className={`font-display font-700 text-xs tracking-[0.3em] uppercase ${b.color.split(' ')[1]}`}>
                    {b.tagline}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-navy-light">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-display font-800 text-3xl ${b.color.split(' ')[1]}`}>{b.month}</span>
                  <div className={`flex-1 h-px ${b.color.split(' ')[0]}/30`} style={{ background: `${b.accent}30` }} />
                </div>
                <h3 className="font-display font-800 text-2xl uppercase tracking-wide text-white mb-3">{b.title}</h3>
                <p className="font-body text-white/55 text-sm leading-relaxed mb-5">{b.description}</p>

                <div className="space-y-2">
                  {b.focuses.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span style={{ color: b.accent }} className="text-lg leading-none mt-0.5 flex-shrink-0">▸</span>
                      <span className="font-body text-white/70 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-block border border-cyan-brand/30 bg-cyan-brand/5 px-8 py-5 max-w-2xl">
            <p className="font-body text-white/70 text-sm leading-relaxed">
              <span className="text-cyan-brand font-600">À chaque fin de semaine :</span> évaluation des capacités physiques remise par courriel aux parents et à l'athlète, pour suivre la progression en temps réel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
