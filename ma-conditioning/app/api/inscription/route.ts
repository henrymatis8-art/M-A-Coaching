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
      sport, bloc, semaines, objectif, message,
    } = data

    const montant = prix[semaines] ?? 0

    // Email to the coaches
    await resend.emails.send({
      from: 'M&A Conditioning <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      subject: `Nouvelle inscription — ${prenomAthlete} ${nomAthlete} — ${bloc}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <h1 style="color: #00d4ff; font-size: 28px; margin-bottom: 8px; letter-spacing: 2px; text-transform: uppercase;">Nouvelle Inscription</h1>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px;">M&A Conditioning — Programme Été 2025</p>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td colspan="2" style="padding:12px 0; border-bottom:1px solid rgba(0,212,255,0.2);">
                <strong style="color:#00d4ff; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Informations du parent</strong>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px; width:40%;">Nom complet</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${prenomParent} ${nomParent}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Courriel</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${courriel}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Téléphone</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${telephone}</td>
            </tr>

            <tr>
              <td colspan="2" style="padding:20px 0 12px; border-bottom:1px solid rgba(0,212,255,0.2);">
                <strong style="color:#00d4ff; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Informations de l'athlète</strong>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Nom complet</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${prenomAthlete} ${nomAthlete}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Âge</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${ageAthlete} ans</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Sport pratiqué</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${sport}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Objectif</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${objectif}</td>
            </tr>

            <tr>
              <td colspan="2" style="padding:20px 0 12px; border-bottom:1px solid rgba(0,212,255,0.2);">
                <strong style="color:#00d4ff; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Choix du programme</strong>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Bloc</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${bloc}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Semaines</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${semaines} semaine${Number(semaines) > 1 ? 's' : ''}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Montant</td>
              <td style="padding:10px 0; color:#00d4ff; font-size:18px; font-weight:bold;">${montant} $</td>
            </tr>
            ${message ? `
            <tr>
              <td colspan="2" style="padding:20px 0 12px; border-bottom:1px solid rgba(0,212,255,0.2);">
                <strong style="color:#00d4ff; font-size:11px; letter-spacing:2px; text-transform:uppercase;">Message</strong>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding:10px 0; color:rgba(255,255,255,0.7); font-size:13px;">${message}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top:32px; padding:16px; border:1px solid rgba(0,212,255,0.3); background:rgba(0,212,255,0.05); border-radius:4px;">
            <p style="color:#00d4ff; font-size:12px; margin:0;">⚡ Action requise : Envoyer la facture de ${montant}$ à <strong>${courriel}</strong> dans les 7 prochains jours.</p>
          </div>

          <p style="color:rgba(255,255,255,0.2); font-size:11px; margin-top:32px; text-align:center;">M&A Conditioning · Montréal · Été 2025</p>
        </div>
      `,
    })

    // Confirmation email to the parent
    await resend.emails.send({
      from: 'M&A Conditioning <onboarding@resend.dev>',
      to: courriel,
      subject: `Confirmation d'inscription — ${prenomAthlete} — M&A Conditioning`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <h1 style="color: #00d4ff; font-size: 28px; margin-bottom: 8px; letter-spacing: 2px; text-transform: uppercase;">Inscription Confirmée</h1>
          <p style="color: rgba(255,255,255,0.5); margin-bottom: 32px;">Merci, ${prenomParent} ! Voici le récapitulatif de l'inscription de ${prenomAthlete}.</p>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px; width:40%;">Athlète</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${prenomAthlete} ${nomAthlete}, ${ageAthlete} ans</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Bloc</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${bloc}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Durée</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${semaines} semaine${Number(semaines) > 1 ? 's' : ''} · 5 sessions/semaine · 2h/session</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Montant total</td>
              <td style="padding:10px 0; color:#00d4ff; font-size:20px; font-weight:bold;">${montant} $</td>
            </tr>
          </table>

          <div style="margin-top:32px; padding:20px; border:1px solid rgba(0,212,255,0.3); background:rgba(0,212,255,0.05); border-radius:4px;">
            <p style="color:white; font-size:14px; font-weight:bold; margin:0 0 8px;">📧 Facturation</p>
            <p style="color:rgba(255,255,255,0.6); font-size:13px; margin:0;">Une facture de <strong style="color:#00d4ff;">${montant} $</strong> vous sera envoyée par courriel dans les <strong>7 jours</strong> suivant cette confirmation. Aucun paiement n'est requis maintenant.</p>
          </div>

          <div style="margin-top:20px; padding:20px; border:1px solid rgba(255,255,255,0.1); border-radius:4px;">
            <p style="color:white; font-size:14px; font-weight:bold; margin:0 0 8px;">📞 Questions ?</p>
            <p style="color:rgba(255,255,255,0.6); font-size:13px; margin:0;">
              <a href="tel:5147098609" style="color:#00d4ff;">514-709-8609</a> · 
              <a href="mailto:coachalexandre2005@gmail.com" style="color:#00d4ff;">coachalexandre2005@gmail.com</a>
            </p>
          </div>

          <p style="color:rgba(255,255,255,0.2); font-size:11px; margin-top:32px; text-align:center;">M&A Conditioning · Montréal · Été 2025</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Inscription email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
