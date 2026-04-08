'use client'
import Image from 'next/image'

export default function Footer() {
  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Programme', href: '#programme' },
    { label: 'Blocs', href: '#blocs' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Inscription', href: '#inscription' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy border-t border-cyan-brand/20">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="relative w-40 h-12 mb-4">
              <Image
                src="/N%C3%A9gatif%201.png"
                alt="M&A Conditioning"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-display text-sm tracking-[0.2em] text-cyan-brand uppercase mb-4">
              Force · Fondation · Avenir
            </p>
            <p className="font-body text-white/40 text-xs leading-relaxed max-w-xs">
              Programme de conditionnement physique pour jeunes de 8 à 20 ans. Montréal, été 2025.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-700 text-xs tracking-[0.3em] uppercase text-white/50 mb-5">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="font-body text-white/50 text-sm hover:text-cyan-brand transition-colors duration-200 text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-xs tracking-[0.3em] uppercase text-white/50 mb-5">Contact direct</h4>
            <div className="space-y-3">
              <a href="tel:5147098609" className="flex items-center gap-3 group">
                <span className="text-cyan-brand text-sm">📞</span>
                <span className="font-body text-white/60 text-sm group-hover:text-cyan-brand transition-colors duration-200">514-709-8609</span>
              </a>
              <a href="mailto:coachalexandre2005@gmail.com" className="flex items-center gap-3 group">
                <span className="text-cyan-brand text-sm">✉</span>
                <span className="font-body text-white/60 text-sm group-hover:text-cyan-brand transition-colors duration-200 break-all">coachalexandre2005@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-cyan-brand text-sm">📍</span>
                <span className="font-body text-white/60 text-sm">Montréal, QC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/25 text-xs text-center sm:text-left">
            © 2025 M&A Conditioning. Tous droits réservés. | Montréal, QC
          </p>
          <p className="font-body text-white/25 text-xs">
            Programme été 2025 · Juin – Juillet – Août
          </p>
        </div>
      </div>
    </footer>
  )
}
