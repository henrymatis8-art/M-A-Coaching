'use client'
import { useInView } from 'react-intersection-observer'

const schedule = [
  { day: 'Lundi',     times: ['9h – 11h', '20h – 22h'], weekend: false },
  { day: 'Mardi',     times: ['9h – 11h', '20h – 22h'], weekend: false },
  { day: 'Mercredi',  times: ['9h – 11h', '20h – 22h'], weekend: false },
  { day: 'Vendredi',  times: ['9h – 11h', '20h – 22h'], weekend: false },
  { day: 'Samedi',    times: ['9h – 11h'],               weekend: true  },
  { day: 'Dimanche',  times: ['—'],                      weekend: true  },
]

export default function Horaires() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="horaires" className="relative py-28" style={{ background: '#111827' }}>
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '400ms' }}
      >
        <div className="text-center mb-8">
          <h2
            className="text-4xl sm:text-5xl uppercase tracking-tight text-white font-bold mb-3"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Horaire
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ background: '#457B9D' }} />
        </div>

        <div className="max-w-2xl mx-auto space-y-3 px-5">
          {schedule.map((s) => {
            const isRest = s.day === 'Dimanche'
            return (
              <div
                key={s.day}
                className="flex items-center justify-between px-6 py-4 border"
                style={{
                  borderColor: isRest ? 'rgba(255,255,255,0.05)' : '#00d4ff',
                  background: isRest ? 'transparent' : 'rgba(69,123,157,0.08)',
                }}
              >
                {/* Left — day + tag */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'var(--font-barlow)', letterSpacing: '0.05em' }}
                  >
                    {s.day}
                  </span>
                  {s.weekend && !isRest && (
                    <span
                      className="text-xs px-2 py-0.5 border font-bold uppercase tracking-wider"
                      style={{ borderColor: '#457B9D', color: '#457B9D', fontFamily: 'var(--font-barlow)' }}
                    >
                      Fin de semaine
                    </span>
                  )}
                </div>

                {/* Right — time slots */}
                <div className="flex items-center gap-2">
                  {s.times[0] === '—' ? (
                    <span
                      className="font-bold text-lg"
                      style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-barlow)' }}
                    >
                      Repos
                    </span>
                  ) : (
                    s.times.map((t) => (
                      <span
                        key={t}
                        className="font-bold text-sm px-3 py-1 border"
                        style={{
                          color: '#457B9D',
                          borderColor: '#00d4ff',
                          background: 'rgba(129, 57, 230, 0.08)',
                          fontFamily: 'var(--font-barlow)',
                        }}
                      >
                        {t}
                      </span>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <div className="max-w-2xl mx-auto mt-6 px-5">
          <div
            className="px-6 py-4 border text-sm"
            style={{ borderColor: 'rgba(69,123,157,0.3)', background: 'rgba(69,123,157,0.05)', color: 'rgba(255,255,255,0.5)' }}
          >
            <span style={{ color: '#457B9D', fontWeight: 600 }}>Note :</span>{' '}
            Jeudi et dimanche sont des journées de repos. Chaque session dure 2 heures.
          </div>
        </div>
      </div>
    </section>
  )
}