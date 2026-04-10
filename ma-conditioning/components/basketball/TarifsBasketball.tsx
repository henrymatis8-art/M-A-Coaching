'use client'
import { useInView } from 'react-intersection-observer'

const tarifs = [
  {
    weeks: 1,
    price: '150 + frais d\'admin',
    perHour: 225 / 12, // 12 sessions de 2h
    label: 'Essai',
    description: 'Parfait pour découvrir le programme et évaluer l\'apport pour ton jeune athlète.',
    features: ['6 sessions  de 2h', 'Évaluation initiale', 'Rapport hebdomadaire'],
    popular: false,
  },
  {
    weeks: 2,
    price: 350,
    perHour: 30, // 12 sessions de 2h
    label: 'Développement',
    description: 'Deux semaines pour vraiment ressentir la progression et ancrer les bons gestes.',
    features: ['12 sessions de 2h', 'Évaluation initiale', '2 rapports hebdomadaires', 'Économie de 250$'],
    popular: false,
  },
  {
    weeks: 3,
    price: 450,
    perHour: 450 / 18, // 18 sessions de 2h
    label: 'Engagement',
    description: 'Trois semaines pour une transformation réelle et mesurable des habiletés basketball.',
    features: ['18 sessions de 2h', 'Évaluation initiale', '3 rapports hebdomadaires', 'Économie de 600$'],
    popular: true,
  },
  {
    weeks: 4,
    price: 525,
    perHour: 525 / 24, // 24 sessions de 2h
    label: 'Bloc Complet',
    description: 'Le mois entier — la meilleure valeur et la progression la plus complète possible.',
    features: ['24 sessions de 2h', 'Évaluation initiale', '4 rapports hebdomadaires', 'Économie de 1 000$', 'Accès prioritaire au bloc suivant'],
    popular: false,
  },
]

export default function TarifsBasketball() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tarifs" className="relative py-28 overflow-hidden" style={{ background: '#111827' }}>
      <div className="absolute top-0 left-0 right-0 h-16" style={{ background: '#0a0e1a', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-xs tracking-[0.4em] uppercase block mb-3 font-bold" style={{ color: '#E63946' }}>
            Tarification
          </span>
          <h2 className="text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
            Nos Tarifs
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: '#E63946' }} />
          <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Choisissez le nombre de semaines qui correspond à votre engagement.
            Les sessions ont lieu 6 jours par semaine — lundi au vendredi à 18h, samedi à 12h.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tarifs.map((t, i) => (
            <div
              key={t.weeks}
              className={`relative border p-7 flex flex-col transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                borderColor: t.popular ? '#E63946' : 'rgba(255,255,255,0.1)',
                background: '#0a0e1a',
                transitionDelay: `${i * 100}ms`,
                boxShadow: t.popular ? '0 0 20px rgba(230,57,70,0.3), 0 0 60px rgba(230,57,70,0.1)' : 'none',
              }}
            >
              {t.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs tracking-wider uppercase px-4 py-1 font-bold"
                  style={{ background: '#E63946' }}
                >
                  Meilleure valeur
                </div>
              )}

              <div className="mb-1">
                <span className="text-4xl font-bold" style={{ color: '#E63946', fontFamily: 'var(--font-barlow)' }}>{t.weeks}</span>
                <span className="text-white/50 text-sm ml-1">{t.weeks === 1 ? 'semaine' : 'semaines'}</span>
              </div>
              <h3 className="text-xl uppercase tracking-wide text-white font-bold mb-4" style={{ fontFamily: 'var(--font-barlow)' }}>{t.label}</h3>

              <div className="mb-4">
                <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-barlow)' }}>{t.price}$</span>
                <div className="text-xs mt-1" style={{ color: '#E63946' }}>{t.perHour}$/heure · frais d&apos;admin inclus</div>
              </div>

              <p className="text-white/50 text-xs leading-relaxed mb-5">{t.description}</p>

              <div className="space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: '#E63946' }}>✓</span>
                    <span className="text-white/70 text-xs">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#inscription"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#inscription')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-6 text-xs tracking-wider uppercase text-center py-3 transition-colors duration-200 font-bold block"
                style={
                  t.popular
                    ? { background: '#E63946', color: 'white' }
                    : { border: '1px solid rgba(255,255,255,0.2)', color: 'white' }
                }
                onMouseEnter={e => {
                  if (t.popular) { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#E63946' }
                  else { e.currentTarget.style.borderColor = '#E63946'; e.currentTarget.style.color = '#E63946' }
                }}
                onMouseLeave={e => {
                  if (t.popular) { e.currentTarget.style.background = '#E63946'; e.currentTarget.style.color = 'white' }
                  else { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white' }
                }}
              >
                S&apos;inscrire →
              </a>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <div className="mt-10 text-center">
          <div
            className="inline-flex items-center gap-3 px-8 py-4 border"
            style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#E63946' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-white/60 text-sm">
              <span className="text-white font-semibold">Facturation :</span>{' '}
              Une facture vous sera envoyée par courriel dans la semaine suivant votre inscription. Aucun paiement à l&apos;avance requis.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: '#0a0e1a', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  )
}
