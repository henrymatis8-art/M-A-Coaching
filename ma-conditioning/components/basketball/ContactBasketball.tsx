'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ContactBasketball() {
  const [form, setForm] = useState({ prenom: '', nom: '', courriel: '', telephone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact-basketball', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ prenom: '', nom: '', courriel: '', telephone: '', message: '' })
    } catch { setStatus('error') }
  }

  const inputStyle = {
    width: '100%',
    background: '#0a0e1a',
    border: '1px solid rgba(255,255,255,0.15)',
    color: 'white',
    padding: '12px 16px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'var(--font-dm-sans)',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '8px',
    fontFamily: 'var(--font-barlow)',
    fontWeight: 700,
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: '#111827' }}>
      <div className="absolute top-0 left-0 right-0 h-16" style={{ background: '#0a0e1a', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 pt-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-xs tracking-[0.4em] uppercase block mb-3 font-bold" style={{ color: '#E63946' }}>On est là</span>
          <h2 className="text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
            Contact
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: '#E63946' }} />
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Une question sur le programme basketball ? On répond rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {status === 'success' ? (
              <div className="h-full flex items-center justify-center border p-12 text-center" style={{ borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.05)' }}>
                <div>
                  <div className="text-5xl mb-4" style={{ color: '#E63946' }}>✓</div>
                  <h3 className="text-2xl uppercase text-white mb-2 font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>Message envoyé</h3>
                  <p className="text-white/50 text-sm">On vous répond dans les plus brefs délais.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input required style={inputStyle} placeholder="Prénom" value={form.prenom} onChange={(e) => set('prenom', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input required style={inputStyle} placeholder="Nom" value={form.nom} onChange={(e) => set('nom', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Courriel *</label>
                  <input required type="email" style={inputStyle} placeholder="courriel@exemple.com" value={form.courriel} onChange={(e) => set('courriel', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input style={inputStyle} placeholder="514-000-0000" value={form.telephone} onChange={(e) => set('telephone', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                </div>
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: 'none' }} placeholder="Votre message..." value={form.message} onChange={(e) => set('message', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '13px', border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.1)', padding: '12px 16px' }}>
                    Erreur lors de l'envoi. Veuillez nous contacter directement.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full font-bold text-sm uppercase py-4 transition-colors duration-200 disabled:opacity-50"
                  style={{ background: '#E63946', color: 'white', letterSpacing: '0.15em', fontFamily: 'var(--font-barlow)' }}
                  onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#E63946' }}}
                  onMouseLeave={e => { e.currentTarget.style.background = '#E63946'; e.currentTarget.style.color = 'white' }}
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
            <div className="border p-8" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0a0e1a' }}>
              <h3 className="text-xl uppercase tracking-wide text-white font-bold mb-6" style={{ fontFamily: 'var(--font-barlow)' }}>Informations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: '📞', label: 'Téléphone', value: '514-709-8609', href: 'tel:5147098609' },
                  { icon: '✉', label: 'Courriel', value: 'coachalexandre2005@gmail.com', href: 'mailto:coachalexandre2005@gmail.com' },
                  { icon: '📍', label: 'Localisation', value: 'Montréal, QC — Lieu à confirmer', href: null },
                ].map((info) => (
                  <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <span style={{ color: '#E63946', fontSize: '16px', marginTop: '2px' }}>{info.icon}</span>
                    <div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '4px', fontFamily: 'var(--font-barlow)', fontWeight: 700 }}>{info.label}</div>
                      {info.href
                        ? <a href={info.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none' }} onMouseEnter={e => (e.currentTarget.style.color = '#E63946')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>{info.value}</a>
                        : <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{info.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border p-8" style={{ borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.05)' }}>
              <h3 className="text-lg uppercase tracking-wide font-bold mb-5" style={{ color: '#E63946', fontFamily: 'var(--font-barlow)' }}>Horaire Programme</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { j: 'Lun – Ven', h: '18h00', d: '2h / session' },
                  { j: 'Samedi', h: '12h00', d: '2h / session' },
                  { j: 'Dimanche', h: 'Repos', d: '' },
                ].map((s) => (
                  <div key={s.j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div>
                      <span style={{ color: 'white', fontWeight: 700, fontSize: '13px', fontFamily: 'var(--font-barlow)' }}>{s.j}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: s.j === 'Dimanche' ? 'rgba(255,255,255,0.2)' : '#E63946', fontWeight: 800, fontSize: '15px', fontFamily: 'var(--font-barlow)' }}>{s.h}</span>
                      {s.d && <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', marginLeft: '8px' }}>· {s.d}</span>}
                    </div>
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
