'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const BLOCS = ['Juin — Fondamentaux', 'Juillet — Développement', 'Août — Performance']
const SEMAINES = [
  { value: '1', label: '1 semaine — 500$' },
  { value: '2', label: '2 semaines — 750$' },
  { value: '3', label: '3 semaines — 900$' },
  { value: '4', label: '4 semaines (bloc complet) — 1000$' },
]

type FormData = {
  prenomParent: string
  nomParent: string
  courriel: string
  telephone: string
  prenomAthlete: string
  nomAthlete: string
  ageAthlete: string
  bloc: string
  semaines: string
  niveauBasket: string
  objectif: string
  message: string
}

const empty: FormData = {
  prenomParent: '', nomParent: '', courriel: '', telephone: '',
  prenomAthlete: '', nomAthlete: '', ageAthlete: '',
  bloc: '', semaines: '', niveauBasket: '', objectif: '', message: '',
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

export default function InscriptionBasketball() {
  const [form, setForm] = useState<FormData>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const set = (k: keyof FormData, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/inscription-basketball', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm(empty) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const prix: Record<string, number> = { '1': 500, '2': 750, '3': 900, '4': 1000 }

  const labelStyle = { display: 'block', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)', marginBottom: '8px', fontFamily: 'var(--font-barlow)', fontWeight: 700 }

  const sectionTitleStyle = {
    fontSize: '16px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#E63946',
    fontFamily: 'var(--font-barlow)',
    fontWeight: 700,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  return (
    <section id="inscription" className="relative py-28 overflow-hidden" style={{ background: '#0a0e1a' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(230,57,70,0.04) 8px, rgba(230,57,70,0.04) 10px)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-xs tracking-[0.4em] uppercase block mb-3 font-bold" style={{ color: '#E63946' }}>
            Rejoins le programme
          </span>
          <h2 className="text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4 font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
            Inscription
          </h2>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: '#E63946' }} />
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Remplis le formulaire ci-dessous. Une facture vous sera envoyée par courriel dans la semaine suivant votre inscription.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-20 border" style={{ borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.05)' }}>
            <div className="text-5xl mb-4" style={{ color: '#E63946' }}>✓</div>
            <h3 className="text-3xl uppercase text-white mb-3 font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>Inscription reçue !</h3>
            <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
              Merci pour votre inscription au programme Basketball. Vous recevrez une confirmation par courriel ainsi que la facture dans les prochains jours.
              <br /><br />
              <span style={{ color: '#E63946' }}>Questions ? → coachalexandre2005@gmail.com</span>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`border p-8 sm:p-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#111827', transitionDelay: '150ms' }}
          >
            {/* Parent */}
            <div style={{ marginBottom: '32px' }}>
              <div style={sectionTitleStyle}>
                <span style={{ width: '24px', height: '1px', background: 'rgba(230,57,70,0.4)', display: 'inline-block' }} />
                Informations du parent
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: 'prenomParent', label: 'Prénom *', placeholder: 'Prénom', type: 'text', required: true },
                  { key: 'nomParent', label: 'Nom *', placeholder: 'Nom', type: 'text', required: true },
                  { key: 'courriel', label: 'Courriel *', placeholder: 'courriel@exemple.com', type: 'email', required: true },
                  { key: 'telephone', label: 'Téléphone *', placeholder: '514-000-0000', type: 'text', required: true },
                ].map(({ key, label, placeholder, type, required }) => (
                  <div key={key}>
                    <label style={labelStyle}>{label}</label>
                    <input
                      required={required}
                      type={type}
                      style={inputStyle}
                      placeholder={placeholder}
                      value={form[key as keyof FormData]}
                      onChange={(e) => set(key as keyof FormData, e.target.value)}
                      onFocus={e => (e.target.style.borderColor = '#E63946')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Athlete */}
            <div style={{ marginBottom: '32px' }}>
              <div style={sectionTitleStyle}>
                <span style={{ width: '24px', height: '1px', background: 'rgba(230,57,70,0.4)', display: 'inline-block' }} />
                Informations de l'athlète
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Prénom *</label>
                  <input required style={inputStyle} placeholder="Prénom de l'athlète" value={form.prenomAthlete} onChange={(e) => set('prenomAthlete', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                </div>
                <div>
                  <label style={labelStyle}>Nom *</label>
                  <input required style={inputStyle} placeholder="Nom de l'athlète" value={form.nomAthlete} onChange={(e) => set('nomAthlete', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                </div>
                <div>
                  <label style={labelStyle}>Âge * (9 à 12 ans)</label>
                  <input required type="number" min="9" max="12" style={inputStyle} placeholder="9 à 12 ans" value={form.ageAthlete} onChange={(e) => set('ageAthlete', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
                </div>
                <div>
                  <label style={labelStyle}>Niveau de basketball *</label>
                  <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.niveauBasket} onChange={(e) => set('niveauBasket', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}>
                    <option value="">Sélectionner...</option>
                    <option value="Débutant">Débutant — peu ou pas d'expérience</option>
                    <option value="Intermédiaire">Intermédiaire — joue depuis 1-2 ans</option>
                    <option value="Avancé">Avancé — joue en ligue organisée</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={labelStyle}>Objectif principal *</label>
                <input required style={inputStyle} placeholder="Ex: améliorer mon dribble, devenir plus rapide, apprendre les fondamentaux..." value={form.objectif} onChange={(e) => set('objectif', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')} />
              </div>
            </div>

            {/* Programme */}
            <div style={{ marginBottom: '32px' }}>
              <div style={sectionTitleStyle}>
                <span style={{ width: '24px', height: '1px', background: 'rgba(230,57,70,0.4)', display: 'inline-block' }} />
                Choix du programme
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Bloc de départ *</label>
                  <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.bloc} onChange={(e) => set('bloc', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}>
                    <option value="">Sélectionner un bloc...</option>
                    {BLOCS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Nombre de semaines *</label>
                  <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.semaines} onChange={(e) => set('semaines', e.target.value)} onFocus={e => (e.target.style.borderColor = '#E63946')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}>
                    <option value="">Sélectionner...</option>
                    {SEMAINES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
              </div>

              {form.semaines && (
                <div style={{ marginTop: '16px', border: '1px solid rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.05)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>Total estimé</span>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '2px' }}>Facture envoyée par courriel après l'inscription</div>
                  </div>
                  <span style={{ color: '#E63946', fontSize: '28px', fontWeight: 800, fontFamily: 'var(--font-barlow)' }}>{prix[form.semaines]}$</span>
                </div>
              )}
            </div>

            {/* Message */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Message / Questions (optionnel)</label>
              <textarea
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
                placeholder="Blessures passées, conditions médicales, questions sur le programme..."
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                onFocus={e => (e.target.style.borderColor = '#E63946')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
              />
            </div>

            {status === 'error' && (
              <div style={{ marginBottom: '16px', border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.1)', color: '#f87171', padding: '12px 16px', fontSize: '13px' }}>
                Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full font-bold text-sm uppercase py-5 transition-colors duration-200 disabled:opacity-50"
              style={{ background: '#E63946', color: 'white', letterSpacing: '0.15em', fontFamily: 'var(--font-barlow)' }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#E63946' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E63946'; e.currentTarget.style.color = 'white' }}
            >
              {status === 'loading' ? 'Envoi en cours...' : "Confirmer l'inscription →"}
            </button>

            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', textAlign: 'center', marginTop: '16px' }}>
              Aucun paiement requis maintenant · Facture envoyée par courriel dans les 7 jours
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
