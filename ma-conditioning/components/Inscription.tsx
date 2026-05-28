'use client'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const MOIS = ['Juin', 'Juillet', 'Août']
const DATES_DE_DEBUT: Record<string, string[]> = {
  Juin: ['29'],
  Juillet: ['6', '13', '20', '27'],
  Août: ['3', '10', '17', '24'],
}
const SEMAINES = [
  { value: '1', label: '1 semaine — 125$' },
  { value: '2', label: '2 semaines — 225$' },
  { value: '3', label: '3 semaines — 300$' },
  { value: '4', label: '4 semaines (programme complet) — 350$' },
]
const SPORTS = ['Athlétisme / Sprint', 'Basketball', 'Football', 'Soccer', 'Tennis', 'Natation', 'Autre sport', 'Aucun sport spécifique']

type FormData = {
  prenomParent: string
  nomParent: string
  courriel: string
  telephone: string
  prenomAthlete: string
  nomAthlete: string
  ageAthlete: string
  sport: string
  bloc: string
  dateDebut: string
  semaines: string
  objectif: string
  message: string
}

const empty: FormData = {
  prenomParent: '', nomParent: '', courriel: '', telephone: '',
  prenomAthlete: '', nomAthlete: '', ageAthlete: '',
  sport: '', bloc: '', dateDebut: '', semaines: '', objectif: '', message: '',
}

export default function Inscription() {
  const [form, setForm] = useState<FormData>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const set = (k: keyof FormData, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(empty)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const prix: Record<string, number> = { '1': 125, '2': 225, '3': 300, '4': 350 }

  return (
    <section id="inscription" className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute inset-0 track-lines opacity-20" />

      <div className="relative max-w-4xl mx-auto px-5">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.4em] text-cyan-brand uppercase block mb-3">Rejoins le programme</span>
          <h2 className="font-display font-800 text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            Inscription
          </h2>
          <div className="w-16 h-0.5 bg-cyan-brand mx-auto mb-6" />
          <p className="font-body text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Remplis le formulaire ci-dessous. Une facture vous sera envoyée par courriel dans la semaine suivant votre inscription.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-20 border border-cyan-brand/30 bg-cyan-brand/5">
            <div className="text-cyan-brand text-5xl mb-4">✓</div>
            <h3 className="font-display font-800 text-3xl uppercase text-white mb-3">Inscription reçue !</h3>
            <p className="font-body text-white/60 text-sm max-w-md mx-auto leading-relaxed">
              Merci pour votre inscription. Vous recevrez une confirmation par courriel ainsi que la facture dans les prochains jours.
              <br /><br />
              <span className="text-cyan-brand">Questions ? → coachalexandre2005@gmail.com</span>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`border border-white/10 bg-navy-light p-8 sm:p-12 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {/* Parent info */}
            <div className="mb-8">
              <h3 className="font-display font-700 text-lg uppercase tracking-wide text-cyan-brand mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-cyan-brand/40" />
                Informations du parent <span className="font-display font-400 text-xs text-white/40">(si applicable)</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Prénom</label>
                  <input className="form-input" placeholder="Prénom" value={form.prenomParent} onChange={(e) => set('prenomParent', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Nom</label>
                  <input className="form-input" placeholder="Nom" value={form.nomParent} onChange={(e) => set('nomParent', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Courriel</label>
                  <input type="email" className="form-input" placeholder="courriel@exemple.com" value={form.courriel} onChange={(e) => set('courriel', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Téléphone</label>
                  <input className="form-input" placeholder="514-000-0000" value={form.telephone} onChange={(e) => set('telephone', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Athlete info */}
            <div className="mb-8">
              <h3 className="font-display font-700 text-lg uppercase tracking-wide text-cyan-brand mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-cyan-brand/40" />
                  Informations de l&apos;athlète
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Prénom *</label>
                  <input required className="form-input" placeholder="Prénom de l&apos;athlète" value={form.prenomAthlete} onChange={(e) => set('prenomAthlete', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Nom *</label>
                  <input required className="form-input" placeholder="Nom de l&apos;athlète" value={form.nomAthlete} onChange={(e) => set('nomAthlete', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Âge *</label>
                  <input required type="number" min="8" max="20" className="form-input" placeholder="13 à 19 ans" value={form.ageAthlete} onChange={(e) => set('ageAthlete', e.target.value)} />
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Sport pratiqué *</label>
                  <select required className="form-input" value={form.sport} onChange={(e) => set('sport', e.target.value)}>
                    <option value="">Sélectionner...</option>
                    {SPORTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Objectif principal *</label>
                <input required className="form-input" placeholder="Ex: améliorer ma vitesse, prévenir les blessures, me mettre en forme..." value={form.objectif} onChange={(e) => set('objectif', e.target.value)} />
              </div>
            </div>

            {/* Programme choice */}
            <div className="mb-8">
              <h3 className="font-display font-700 text-lg uppercase tracking-wide text-cyan-brand mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-cyan-brand/40" />
                Choix du programme
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Mois de début *</label>
                  <select required className="form-input" value={form.bloc} onChange={(e) => {
                    set('bloc', e.target.value)
                    set('dateDebut', '')
                  }}>
                    <option value="">Sélectionner un mois...</option>
                    {MOIS.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Date de début *</label>
                  <select
                    required
                    className="form-input"
                    value={form.dateDebut}
                    onChange={(e) => set('dateDebut', e.target.value)}
                    disabled={!form.bloc}
                  >
                    <option value="">Sélectionner une date...</option>
                    {form.bloc && DATES_DE_DEBUT[form.bloc].map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Nombre de semaines *</label>
                  <select required className="form-input" value={form.semaines} onChange={(e) => set('semaines', e.target.value)}>
                    <option value="">Sélectionner...</option>
                    {SEMAINES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
              </div>

              {/* Price display */}
              {form.semaines && (
                <div className="mt-4 border border-cyan-brand/30 bg-cyan-brand/5 px-6 py-4 flex items-center justify-between">
                  <div>
                    <span className="font-body text-white/60 text-sm">Total estimé</span>
                    <div className="font-body text-white/50 text-xs mt-0.5">Facture envoyée par courriel après l&apos;inscription</div>
                  </div>
                  <span className="font-display font-800 text-3xl text-cyan-brand">{prix[form.semaines]}$</span>
                </div>
              )}
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="font-display text-xs tracking-wider uppercase text-white/50 block mb-2">Message / Questions (optionnel)</label>
              <textarea
                rows={4}
                className="form-input resize-none"
                placeholder="Blessures passées, conditions médicales à signaler, questions..."
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
              />
            </div>

            {status === 'error' && (
              <div className="mb-4 border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-3 font-body text-sm">
                Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-cyan-brand text-navy font-display font-800 text-sm tracking-[0.2em] uppercase py-5 hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Envoi en cours...' : "Confirmer l'inscription →"}
            </button>

            <p className="font-body text-white/30 text-xs text-center mt-4">
              Aucun paiement requis maintenant · Facture envoyée par courriel dans les 7 jours suivant l&apos;inscription
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
