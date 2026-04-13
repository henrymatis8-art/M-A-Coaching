'use client'
import { useInView } from 'react-intersection-observer'

const tarifs = [
  {
    weeks: 1,
    price: '150 + frais d\'admin', // 75$ de frais d'admin pour les sessions uniques            
    perHour: 225 / 10, // 10 sessions de 2h
    label: 'Essai',
    description: 'Parfait pour découvrir le programme et évaluer l\'apport pour ton athlète.',
    features: ['5 sessions de 2h', 'Évaluation initiale', 'Rapport hebdomadaire'],
    popular: false,
  },
  {
    weeks: 2,
    price: 350,
    perHour: 350 / 10, // 10 sessions de 2h
    label: 'Développement',
    description: 'Deux semaines pour vraiment ressentir la progression et ancrer les nouvelles habitudes.',
    features: ['10 sessions de 2h', 'Évaluation initiale', '2 rapports hebdomadaires', 'Économie de 250$'],
    popular: false,
  },
  {
    weeks: 3,
    price: 450,
    perHour: 450 / 15, // 15 sessions de 2h
    label: 'Engagement',
    description: 'Trois semaines pour une transformation réelle et mesurable des capacités physiques.',
    features: ['15 sessions de 2h', 'Évaluation initiale', '3 rapports hebdomadaires', 'Économie de 600$'],
    popular: true,
  },
  {
    weeks: 4,
    price: 525,
    perHour: 525 / 20, // 20 sessions de 2h
    label: 'Bloc Complet',
    description: 'Le mois entier — la meilleure valeur et la progression la plus complète possible.',
    features: ['20 sessions de 2h', 'Évaluation initiale', '4 rapports hebdomadaires', 'Économie de 1 000$', 'Accès prioritaire au bloc suivant'],
    popular: false,
  },
]

export default function Tarifs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tarifs" className="relative bg-navy-light py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-cyan-brand uppercase block mb-3">Tarification</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Nos Tarifs
          </h2>
          <div className="w-16 h-0.5 bg-cyan-brand mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
            Choisissez le nombre de semaines qui correspond à votre engagement.
            Plus vous vous engagez longtemps, meilleure est la valeur par heure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tarifs.map((t, i) => (
            <div
              key={t.weeks}
              className={`relative border ${t.popular ? 'border-cyan-brand' : 'border-white/10'} bg-navy p-7 flex flex-col transition-all duration-700 service-card ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${t.popular ? 'cyan-glow' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-brand text-navy font-display font-700 text-xs tracking-wider uppercase px-4 py-1">
                  Meilleure valeur
                </div>
              )}

              {/* Weeks number */}
              <div className="font-display font-800 text-7xl text-white/5 absolute top-4 right-4 leading-none select-none">
                {t.weeks}
              </div>

              <div className="mb-1">
                <span className="font-display font-800 text-4xl text-cyan-brand">{t.weeks}</span>
                <span className="font-body text-white/50 text-sm ml-1">{t.weeks === 1 ? 'semaine' : 'semaines'}</span>
              </div>
              <h3 className="font-display font-700 text-xl uppercase tracking-wide text-white mb-4">{t.label}</h3>

              <div className="mb-4">
                <span className="font-display font-800 text-4xl text-white">{t.price}$</span>
                <div className="font-body text-xs text-cyan-brand mt-1">
                  {t.weeks === 1
                    ? 'Tarif hors frais d\'admin — 75$ de frais d\'administration en sus'
                    : `${t.perHour}$/heure · frais d'administration inclus`}
                </div>
              </div>

              <p className="font-body text-white/50 text-xs leading-relaxed mb-5">{t.description}</p>

              <div className="space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <span className="text-cyan-brand text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="font-body text-white/70 text-xs">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#inscription"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#inscription')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`mt-6 font-display font-700 text-xs tracking-wider uppercase text-center py-3 transition-colors duration-200 ${
                  t.popular
                    ? 'bg-cyan-brand text-navy hover:bg-white'
                    : 'border border-white/20 text-white hover:border-cyan-brand hover:text-cyan-brand'
                }`}
              >
                S&apos;inscrire →
              </a>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-8 py-4">
            <svg className="w-5 h-5 text-cyan-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="font-body text-white/60 text-sm">
              <span className="text-white font-600">Facturation :</span>{' '}
              Une facture vous sera envoyée par courriel dans la semaine suivant votre inscription. Aucun paiement à l&apos;avance requis lors de l&apos;inscription.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  )
}
