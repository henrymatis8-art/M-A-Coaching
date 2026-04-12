'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export default function ContactBasket() {
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
        body: JSON.stringify({ ...form, programme: 'Basketball Jeunesse' }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ prenom: '', nom: '', courriel: '', telephone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-navy-light py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-[#E63946] uppercase block mb-3">On est là</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">Contact</h2>
          <div className="w-16 h-0.5 bg-[#E63946] mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Une question sur le programme basketball ? On répond rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {status === 'success' ? (
              <div className="h-full flex items-center justify-center border py-16 px-12 text-center" style={{ borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.05)' }}>
                <div>
                  <div className="text-5xl mb-4" style={{ color: '#E63946' }}>✓</div>
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
                    Erreur. Contactez-nous directement à coachalexandre2005@gmail.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full text-white font-display font-800 text-sm tracking-[0.2em] uppercase py-4 transition-colors duration-200 disabled:opacity-50"
                  style={{ background: '#E63946' }}
                >
                  {status === 'loading' ? 'Envoi...' : 'Envoyer →'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div
            className={`space-y-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="border border-white/10 bg-navy p-8">
              <h3 className="font-display font-700 text-xl uppercase tracking-wide text-white mb-6">Informations</h3>
              <div className="space-y-5">
                {[
                  { label: 'Téléphone', value: '514-709-8609', href: 'tel:5147098609' },
                  { label: 'Courriel', value: 'coachalexandre2005@gmail.com', href: 'mailto:coachalexandre2005@gmail.com' },
                  { label: 'Clientèle', value: 'Jeunes de 9 à 12 ans', href: null },
                  { label: 'Lieu', value: 'Montréal — à confirmer', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#E63946' }} />
                    <div>
                      <div className="font-display text-xs tracking-wider uppercase text-white/40 mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-body text-white/80 text-sm hover:text-[#E63946] transition-colors duration-200">{item.value}</a>
                      ) : (
                        <span className="font-body text-white/80 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="border p-8" style={{ borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.05)' }}>
              <h3 className="font-display font-700 text-lg uppercase tracking-wide mb-4" style={{ color: '#E63946' }}>Horaires</h3>
              <div className="space-y-3">
                {[
                  { jour: 'Lundi – Vendredi', heure: '18h00 · 2h/session' },
                  { jour: 'Samedi', heure: '12h00 · 2h/session' },
                  { jour: 'Dimanche', heure: 'Repos' },
                ].map((h) => (
                  <div key={h.jour} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="font-display font-700 text-sm text-white">{h.jour}</span>
                    <span className="font-body text-white/50 text-xs">{h.heure}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to main program */}
            <Link
              href="/"
              className="flex items-center justify-center gap-2 border border-[#00d4ff]/30 text-[#00d4ff] font-display font-700 text-xs tracking-wider uppercase py-4 hover:bg-[#00d4ff]/10 transition-colors duration-200"
            >
              ← Voir aussi le programme principal
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
