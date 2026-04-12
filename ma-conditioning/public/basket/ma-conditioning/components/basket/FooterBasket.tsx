import Link from 'next/link'

export default function FooterBasket() {
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
    <footer className="bg-navy border-t" style={{ borderColor: 'rgba(230,57,70,0.2)' }}>
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display font-800 text-3xl tracking-widest text-white mb-2 uppercase">
              M<span style={{ color: '#E63946' }}>&</span>A
              <span className="font-display font-400 text-lg ml-2 tracking-[0.3em]">Basketball</span>
            </div>
            <p className="font-display text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#E63946' }}>
              Technique · Explosivité · Rigueur
            </p>
            <p className="font-body text-white/40 text-xs leading-relaxed max-w-xs">
              Programme de basketball et développement physique pour jeunes de 9 à 12 ans. Montréal, été 2025.
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
                  className="font-body text-white/50 text-sm hover:text-[#E63946] transition-colors duration-200 text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/"
                className="font-body text-[#00d4ff]/60 text-sm hover:text-[#00d4ff] transition-colors duration-200"
              >
                ← Programme principal (athlétisme)
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-xs tracking-[0.3em] uppercase text-white/50 mb-5">Contact direct</h4>
            <div className="space-y-3">
              <a href="tel:5147098609" className="flex items-center gap-3 group">
                <span className="text-sm" style={{ color: '#E63946' }}>📞</span>
                <span className="font-body text-white/60 text-sm group-hover:text-[#E63946] transition-colors duration-200">514-709-8609</span>
              </a>
              <a href="mailto:coachalexandre2005@gmail.com" className="flex items-center gap-3 group">
                <span className="text-sm" style={{ color: '#E63946' }}>✉</span>
                <span className="font-body text-white/60 text-sm group-hover:text-[#E63946] transition-colors duration-200 break-all">coachalexandre2005@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-sm" style={{ color: '#E63946' }}>📍</span>
                <span className="font-body text-white/60 text-sm">Montréal, QC — lieu à confirmer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/25 text-xs text-center sm:text-left">
            © 2025 M&A Conditioning — Programme Basketball. Tous droits réservés.
          </p>
          <p className="font-body text-white/25 text-xs">
            9 à 12 ans · Lun–Sam · Montréal · Été 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
