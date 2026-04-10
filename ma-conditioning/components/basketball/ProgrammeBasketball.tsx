'use client'
import { useInView } from 'react-intersection-observer'

const focuses = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Fondamentaux Solides',
    desc: 'Dribble, passes, tirs — chaque technique est enseignée correctement dès le départ pour éviter les mauvaises habitudes.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Développement Athlétique',
    desc: 'Vitesse, explosivité, coordination et endurance spécifiques au basketball, adaptés à l\'âge de 9 à 12 ans.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Jeu en Équipe',
    desc: 'Communication, lecture du jeu, respect des coéquipiers — le basketball comme outil de développement social.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Mentalité Compétitive',
    desc: 'Discipline, résilience, confiance en soi — des qualités qui se transfèrent bien au-delà du terrain.',
  },
]

const schedule = [
  { day: 'Lundi – Vendredi', time: '18h00', duration: '2h', type: 'Entraînement semaine' },
  { day: 'Samedi', time: '12h00', duration: '2h', type: 'Entraînement fin de semaine' },
  { day: 'Dimanche', time: '—', duration: '—', type: 'Repos' },
]

export default function ProgrammeBasketball() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="programme" className="relative py-24 overflow-hidden" style={{ background: '#111827' }}>
      <div className="absolute top-0 left-0 right-0 h-16" style={{ background: '#0a0e1a', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-xs tracking-[0.4em] uppercase block mb-3 font-bold" style={{ color: '#E63946' }}>
            Le programme
          </span>
          <h2 className="text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
            Basketball Jeunesse
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: '#E63946' }} />
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Un programme continu et intensif conçu pour les jeunes de 9 à 12 ans. Six jours par semaine,
            on travaille les fondamentaux, le développement physique et la mentalité compétitive dans un
            environnement bienveillant et structuré.
          </p>
        </div>

        {/* Coach spotlight */}
        <div
          className={`border p-8 mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ borderColor: 'rgba(230,57,70,0.3)', background: '#0a0e1a', transitionDelay: '100ms' }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="text-8xl font-bold leading-none" style={{ color: '#E63946', fontFamily: 'var(--font-barlow)', opacity: 0.15, position: 'absolute' }}>A</div>
              <div className="text-6xl font-bold leading-none mb-3" style={{ color: '#E63946', fontFamily: 'var(--font-barlow)' }}>A</div>
              <h3 className="text-2xl uppercase tracking-wide text-white font-bold mb-1" style={{ fontFamily: 'var(--font-barlow)' }}>Alexandre</h3>
              <p className="text-sm font-semibold" style={{ color: '#457B9D' }}>Coach Basketball & Développement Physique</p>
            </div>
            <div className="flex-1">
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Coach de basketball et spécialiste du développement physique, Alexandre a lui-même vécu les
                conséquences d'une mauvaise formation étant jeune. Sa mission : que les jeunes athlètes sous
                sa supervision bâtissent une fondation solide, apprennent les bons gestes dès le début et
                évoluent en confiance — sur le terrain et dans la vie.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Basketball', 'Développement physique', 'Force fonctionnelle', 'Coordination', 'Mentalité sportive'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wider uppercase px-3 py-1 border font-bold"
                    style={{ borderColor: 'rgba(230,57,70,0.3)', color: '#E63946' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Focuses */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {focuses.map((f, i) => (
            <div
              key={f.title}
              className={`p-6 border group transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                borderColor: 'rgba(255,255,255,0.1)',
                transitionDelay: `${200 + i * 100}ms`,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(230,57,70,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            >
              <div className="mb-4" style={{ color: '#E63946' }}>{f.icon}</div>
              <h4 className="text-lg uppercase tracking-wide text-white font-bold mb-2" style={{ fontFamily: 'var(--font-barlow)' }}>{f.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl uppercase tracking-tight text-white font-bold mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>
              Horaire
            </h2>
            <div className="w-16 h-0.5 mx-auto" style={{ background: '#E63946' }} />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {schedule.map((s) => (
              <div
                key={s.day}
                className="flex items-center justify-between px-6 py-4 border"
                style={{ borderColor: s.day === 'Dimanche' ? 'rgba(255,255,255,0.05)' : 'rgba(230,57,70,0.2)', background: s.day === 'Dimanche' ? 'transparent' : 'rgba(230,57,70,0.04)' }}
              >
                <div>
                  <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.05em' }}>{s.day}</span>
                  <span className="text-white/40 text-xs ml-3">{s.type}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg" style={{ color: s.day === 'Dimanche' ? 'rgba(255,255,255,0.2)' : '#E63946', fontFamily: 'var(--font-barlow)' }}>{s.time}</span>
                  {s.duration !== '—' && (
                    <span className="text-white/40 text-xs ml-2">· {s.duration}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Location note */}
          <div className="mt-6 text-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-4 border"
              style={{ borderColor: 'rgba(69,123,157,0.4)', background: 'rgba(69,123,157,0.05)' }}
            >
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#457B9D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-white/60 text-sm">
                <span className="font-semibold" style={{ color: '#457B9D' }}>Lieu :</span>{' '}
                À déterminer — Montréal, QC · Confirmation envoyée lors de l'inscription
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: '#0a0e1a', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  )
}
