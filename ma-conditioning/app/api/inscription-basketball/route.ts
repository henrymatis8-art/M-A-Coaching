import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'coachalexandre2005@gmail.com'

const prix: Record<string, number> = { '1': 500, '2': 750, '3': 900, '4': 1000 }

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const {
      prenomParent, nomParent, courriel, telephone,
      prenomAthlete, nomAthlete, ageAthlete,
      niveauBasket, bloc, semaines, objectif, message,
    } = data

    const montant = prix[semaines] ?? 0

    // Email to coaches
    await resend.emails.send({
      from: 'M&A Conditioning <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      subject: `🏀 Nouvelle inscription Basketball — ${prenomAthlete} ${nomAthlete} — ${bloc}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <div style="border-left: 4px solid #E63946; padding-left: 16px; margin-bottom: 32px;">
            <h1 style="color: #E63946; font-size: 26px; margin: 0 0 4px; letter-spacing: 2px; text-transform: uppercase;">Nouvelle Inscription</h1>
            <p style="color: rgba(255,255,255,0.4); margin: 0; font-size: 13px;">M&A Conditioning — Programme Basketball · Été 2025</p>
          </div>

          <table style="width:100%; border-collapse:collapse;">
            <tr><td colspan="2" style="padding:10px 0; border-bottom:1px solid rgba(230,57,70,0.2);">
              <strong style="color:#E63946; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Parent</strong>
            </td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px; width:40%;">Nom</td><td style="padding:8px 0; color:white; font-size:13px;">${prenomParent} ${nomParent}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Courriel</td><td style="padding:8px 0; color:#E63946; font-size:13px;">${courriel}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Téléphone</td><td style="padding:8px 0; color:white; font-size:13px;">${telephone}</td></tr>

            <tr><td colspan="2" style="padding:16px 0 10px; border-bottom:1px solid rgba(230,57,70,0.2);">
              <strong style="color:#E63946; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Athlète</strong>
            </td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Nom</td><td style="padding:8px 0; color:white; font-size:13px;">${prenomAthlete} ${nomAthlete}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Âge</td><td style="padding:8px 0; color:white; font-size:13px;">${ageAthlete} ans</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Niveau basketball</td><td style="padding:8px 0; color:white; font-size:13px;">${niveauBasket}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Objectif</td><td style="padding:8px 0; color:white; font-size:13px;">${objectif}</td></tr>

            <tr><td colspan="2" style="padding:16px 0 10px; border-bottom:1px solid rgba(230,57,70,0.2);">
              <strong style="color:#E63946; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Programme</strong>
            </td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Bloc</td><td style="padding:8px 0; color:white; font-size:13px;">${bloc}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Semaines</td><td style="padding:8px 0; color:white; font-size:13px;">${semaines} semaine${Number(semaines) > 1 ? 's' : ''}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Montant</td><td style="padding:8px 0; color:#E63946; font-size:20px; font-weight:bold;">${montant} $</td></tr>
            ${message ? `<tr><td colspan="2" style="padding:8px 0; color:rgba(255,255,255,0.6); font-size:13px; border-top:1px solid rgba(255,255,255,0.05);">${message}</td></tr>` : ''}
          </table>

          <div style="margin-top:24px; padding:14px; border:1px solid rgba(230,57,70,0.3); background:rgba(230,57,70,0.05); border-radius:4px;">
            <p style="color:#E63946; font-size:12px; margin:0;">⚡ Envoyer la facture de ${montant}$ à <strong>${courriel}</strong> dans les 7 prochains jours.</p>
          </div>
        </div>
      `,
    })

    // Confirmation to parent
    await resend.emails.send({
      from: 'M&A Conditioning <noreply@contact.m-a-conditioning.com>',
      to: courriel,
      subject: `🏀 Confirmation d'inscription Basketball — ${prenomAthlete} — M&A Conditioning`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <div style="border-left: 4px solid #E63946; padding-left: 16px; margin-bottom: 32px;">
            <h1 style="color: #E63946; font-size: 26px; margin: 0 0 4px; letter-spacing: 2px; text-transform: uppercase;">Inscription Confirmée</h1>
            <p style="color: rgba(255,255,255,0.4); margin: 0; font-size: 13px;">Programme Basketball · M&A Conditioning · Été 2025</p>
          </div>

          <p style="color:rgba(255,255,255,0.7); font-size:14px; margin-bottom:24px;">Merci ${prenomParent} ! Voici le récapitulatif de l'inscription de <strong style="color:white;">${prenomAthlete}</strong> au programme basketball.</p>

          <table style="width:100%; border-collapse:collapse; margin-bottom:24px;">
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px; width:40%;">Athlète</td><td style="padding:8px 0; color:white; font-size:13px;">${prenomAthlete} ${nomAthlete}, ${ageAthlete} ans</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Niveau</td><td style="padding:8px 0; color:white; font-size:13px;">${niveauBasket}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Bloc</td><td style="padding:8px 0; color:white; font-size:13px;">${bloc}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Durée</td><td style="padding:8px 0; color:white; font-size:13px;">${semaines} semaine${Number(semaines) > 1 ? 's' : ''} · 6 sessions/semaine · 2h/session</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Horaire</td><td style="padding:8px 0; color:white; font-size:13px;">Lun–Ven 18h · Sam 12h</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Montant</td><td style="padding:8px 0; color:#E63946; font-size:22px; font-weight:bold;">${montant} $</td></tr>
          </table>

          <div style="padding:18px; border:1px solid rgba(230,57,70,0.3); background:rgba(230,57,70,0.05); border-radius:4px; margin-bottom:16px;">
            <p style="color:white; font-size:14px; font-weight:bold; margin:0 0 6px;">📧 Facturation</p>
            <p style="color:rgba(255,255,255,0.6); font-size:13px; margin:0;">Une facture de <strong style="color:#E63946;">${montant} $</strong> vous sera envoyée par courriel dans les <strong>7 jours</strong>. Aucun paiement requis maintenant.</p>
          </div>

          <div style="padding:18px; border:1px solid rgba(255,255,255,0.1); border-radius:4px;">
            <p style="color:white; font-size:14px; font-weight:bold; margin:0 0 6px;">📞 Questions ?</p>
            <p style="color:rgba(255,255,255,0.6); font-size:13px; margin:0;">
              <a href="tel:5147098609" style="color:#E63946;">514-709-8609</a> · 
              <a href="mailto:coachalexandre2005@gmail.com" style="color:#E63946;">coachalexandre2005@gmail.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Basketball inscription error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
