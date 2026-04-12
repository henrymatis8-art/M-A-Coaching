# M&A Conditioning — Site Web

Programme de conditionnement physique jeunesse · Montréal · Été 2025

---

## 🚀 Installation rapide

### 1. Ouvre le dossier dans VS Code
```
File → Open Folder → sélectionne le dossier ma-conditioning
```

### 2. Installe les dépendances
Dans le terminal intégré (Ctrl+` ou Terminal → New Terminal) :
```bash
npm install
```

### 3. Configure les variables d'environnement
Ouvre le fichier `.env.local` et remplace la valeur :
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx   ← ta clé Resend
CONTACT_EMAIL=coachalexandre2005@gmail.com
```

> Pour obtenir une clé Resend : https://resend.com → Sign up (gratuit) → API Keys → Create API Key

### 4. Lance le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur → http://localhost:3000

---

## 📁 Structure des fichiers

```
ma-conditioning/
├── app/
│   ├── layout.tsx          ← Layout global, fonts, metadata
│   ├── page.tsx            ← Page principale (assemble toutes les sections)
│   ├── globals.css         ← Styles globaux + variables CSS
│   └── api/
│       ├── inscription/route.ts  ← API formulaire d'inscription
│       └── contact/route.ts      ← API formulaire de contact
├── components/
│   ├── Navbar.tsx          ← Navigation fixe + menu mobile
│   ├── Hero.tsx            ← Section héro plein écran
│   ├── Programme.tsx       ← Présentation des coachs & valeurs
│   ├── Blocs.tsx           ← Les 3 blocs (Juin/Juillet/Août)
│   ├── Tarifs.tsx          ← Grille tarifaire (1-4 semaines)
│   ├── Inscription.tsx     ← Formulaire d'inscription complet
│   ├── Contact.tsx         ← Formulaire de contact + infos
│   ├── Footer.tsx          ← Pied de page
│   └── BackToTop.tsx       ← Bouton retour en haut
├── .env.local              ← Variables d'environnement (à configurer)
├── package.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🎨 Thème & couleurs

| Rôle | Valeur |
|------|--------|
| Fond principal | `#0a0e1a` (bleu nuit) |
| Fond secondaire | `#111827` (bleu nuit clair) |
| Accent principal | `#00d4ff` (cyan) |
| Accent énergie | `#E63946` (rouge) |
| Acier | `#457B9D` |
| Texte | `#ffffff` |

---

## 📦 Déploiement (Vercel — recommandé)

```bash
npm install -g vercel
vercel
```

Dans le dashboard Vercel → Settings → Environment Variables :
- `RESEND_API_KEY` → ta clé Resend
- `CONTACT_EMAIL` → coachalexandre2005@gmail.com

---

## ✉️ Configuration Resend

1. Va sur https://resend.com et crée un compte gratuit
2. Crée une API Key dans le dashboard
3. Colle-la dans `.env.local`

> **Note :** En mode gratuit Resend, les emails sont envoyés depuis `onboarding@resend.dev`.
> Pour utiliser ton propre domaine (ex: `info@macondition.com`), tu dois vérifier ton domaine dans Resend.
> Sans domaine custom, les emails fonctionnent parfaitement mais affichent l'adresse Resend comme expéditeur.

---

## 📱 Responsive

Le site est entièrement mobile-first :
- Mobile : menu hamburger, colonnes empilées, boutons pleine largeur
- Tablette : grilles 2 colonnes
- Desktop : grilles 3-4 colonnes, layout complet

---

## 🔧 Personnalisation facile

**Changer les tarifs** → `components/Tarifs.tsx` → tableau `tarifs`
**Changer les blocs** → `components/Blocs.tsx` → tableau `blocs`
**Changer les infos de contact** → `components/Contact.tsx` + `components/Footer.tsx`
**Changer les couleurs** → `tailwind.config.ts` + `app/globals.css`

---

Construit avec ❤️ pour M&A Conditioning · Montréal 2025
