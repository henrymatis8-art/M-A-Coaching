'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [form, setForm] = useState({ prenom: '', nom: '', courriel: '', telephone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ prenom: '', nom: '', courriel: '', telephone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const infos = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
        </svg>
      ),
      label: 'Téléphone',
      value: '514-709-8609',
      href: 'tel:5147098609',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Courriel',
      value: 'coachalexandre2005@gmail.com',
      href: 'mailto:coachalexandre2005@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Localisation',
      value: 'Montréal, QC — Centre Claude-Robillard & autres lieux',
      href: null,
    },
  ]

  return (
    <section id="contact" className="relative bg-navy-light py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-cyan-brand uppercase block mb-3">On est là</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Contact
          </h2>
          <div className="w-16 h-0.5 bg-cyan-brand mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Une question sur le programme ? Une hésitation ? On répond rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {status === 'success' ? (
              <div className="h-full flex items-center justify-center border border-cyan-brand/30 bg-cyan-brand/5 p-12 text-center">
                <div>
                  <div className="text-cyan-brand text-5xl mb-4">✓</div>
                  <h3 className="font-display font-800 text-2xl uppercase text-white mb-2">Message envoyé</h3>
                  <p className="font-body text-white/50 text-sm">On vous répond dans les plus brefs délais.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Prénom *</label>
                    <input required className="form-input" placeholder="Prénom" value={form.prenom} onChange={(e) => set('prenom', e.target.value)} />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Nom *</label>
                    <input required className="form-input" placeholder="Nom" value={form.nom} onChange={(e) => set('nom', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Courriel *</label>
                  <input required type="email" className="form-input" placeholder="courriel@exemple.com" value={form.courriel} onChange={(e) => set('courriel', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Téléphone</label>
                  <input className="form-input" placeholder="514-000-0000" value={form.telephone} onChange={(e) => set('telephone', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Message *</label>
                  <textarea required rows={5} className="form-input resize-none" placeholder="Votre message..." value={form.message} onChange={(e) => set('message', e.target.value)} />
                </div>
                {status === 'error' && (
                  <p className="font-body text-red-400 text-sm border border-red-400/30 bg-red-400/10 px-4 py-3">
                    Erreur lors de l&apos;envoi. Veuillez nous contacter directement.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-cyan-brand text-navy font-display font-800 text-sm tracking-[0.2em] uppercase py-4 hover:bg-white transition-colors duration-200 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Envoi...' : 'Envoyer →'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div
            className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="border border-white/10 bg-navy p-8">
              <h3 className="font-display font-700 text-xl uppercase tracking-wide text-white mb-6">Informations</h3>
              <div className="space-y-5">
                {infos.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="text-cyan-brand mt-0.5 flex-shrink-0">{info.icon}</div>
                    <div>
                      <div className="font-display text-xs tracking-wider uppercase text-white/40 mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="font-body text-white/80 text-sm hover:text-cyan-brand transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-body text-white/80 text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Season */}
            <div className="border border-cyan-brand/30 bg-cyan-brand/5 p-8">
              <h3 className="font-display font-700 text-lg uppercase tracking-wide text-cyan-brand mb-4">Saison Été 2025</h3>
              <div className="space-y-3">
                {[
                  { bloc: 'Juin', phase: 'Fondations', sessions: 'Lun–Ven · 2h/session' },
                  { bloc: 'Juillet', phase: 'Développement', sessions: 'Lun–Ven · 2h/session' },
                  { bloc: 'Août', phase: 'Performance', sessions: 'Lun–Ven · 2h/session' },
                ].map((b) => (
                  <div key={b.bloc} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <span className="font-display font-700 text-sm text-white">{b.bloc}</span>
                      <span className="font-body text-white/40 text-xs ml-2">— {b.phase}</span>
                    </div>
                    <span className="font-body text-white/50 text-xs">{b.sessions}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
