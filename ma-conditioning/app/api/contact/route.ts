import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'coachalexandre2005@gmail.com'

function getResendClient() {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error('Missing RESEND_API_KEY')
  }
  return new Resend(key)
}

export async function POST(req: NextRequest) {
  try {
    const { prenom, nom, courriel, telephone, message } = await req.json()
    const resend = getResendClient()

    // Email to the coaches
    await resend.emails.send({
      from: 'M&A Conditioning <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      subject: `Message de contact — ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <h1 style="color: #00d4ff; font-size: 24px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 2px;">Nouveau Message</h1>
          <p style="color: rgba(255,255,255,0.4); margin-bottom: 32px; font-size: 13px;">M&A Conditioning — Formulaire de contact</p>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px; width:35%;">Nom</td>
              <td style="padding:10px 0; color:white; font-size:13px;">${prenom} ${nom}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Courriel</td>
              <td style="padding:10px 0; color:#00d4ff; font-size:13px;"><a href="mailto:${courriel}" style="color:#00d4ff;">${courriel}</a></td>
            </tr>
            ${telephone ? `
            <tr>
              <td style="padding:10px 0; color:rgba(255,255,255,0.5); font-size:13px;">Téléphone</td>
              <td style="padding:10px 0; color:white; font-size:13px;"><a href="tel:${telephone}" style="color:white;">${telephone}</a></td>
            </tr>` : ''}
            <tr>
              <td colspan="2" style="padding:20px 0 12px; border-top:1px solid rgba(255,255,255,0.1);">
                <p style="color:rgba(255,255,255,0.5); font-size:11px; letter-spacing:2px; text-transform:uppercase; margin:0 0 10px;">Message</p>
                <p style="color:white; font-size:14px; line-height:1.6; margin:0;">${message.replace(/\n/g, '<br/>')}</p>
              </td>
            </tr>
          </table>

          <p style="color:rgba(255,255,255,0.2); font-size:11px; margin-top:32px; text-align:center;">M&A Conditioning · Montréal · Été 2025</p>
        </div>
      `,
    })

    // Confirmation email to the visitor
    await resend.emails.send({
      from: 'M&A Conditioning <onboarding@resend.dev>',
      to: courriel,
      subject: 'Confirmation — Votre message a été reçu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <h1 style="color: #00d4ff; font-size: 28px; margin-bottom: 8px; letter-spacing: 2px; text-transform: uppercase;">Message Reçu</h1>
          <p style="color: rgba(255,255,255,0.6); margin-bottom: 32px; font-size: 14px;">Merci ${prenom}, nous avons bien reçu votre message ! L'équipe M&A Conditioning vous répondra dans les plus brefs délais.</p>

          <div style="padding:20px; border:1px solid rgba(0,212,255,0.3); background:rgba(0,212,255,0.05); border-radius:4px; margin-bottom:24px;">
            <p style="color:white; font-size:13px; margin:0 0 12px; font-weight:bold;">Récapitulatif de votre message :</p>
            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:12px; width:30%;">Nom</td>
                <td style="padding:8px 0; color:white; font-size:12px;">${prenom} ${nom}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:12px;">Courriel</td>
                <td style="padding:8px 0; color:white; font-size:12px;">${courriel}</td>
              </tr>
              ${telephone ? `
              <tr>
                <td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:12px;">Téléphone</td>
                <td style="padding:8px 0; color:white; font-size:12px;">${telephone}</td>
              </tr>` : ''}
              <tr>
                <td colspan="2" style="padding:12px 0; border-top:1px solid rgba(0,212,255,0.2); color:rgba(255,255,255,0.5); font-size:11px; letter-spacing:1px; text-transform:uppercase;">Votre message</td>
              </tr>
              <tr>
                <td colspan="2" style="padding:12px 0; color:rgba(255,255,255,0.8); font-size:13px; line-height:1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>

          <div style="padding:20px; border:1px solid rgba(255,255,255,0.1); border-radius:4px; margin-bottom:24px;">
            <p style="color:white; font-size:14px; font-weight:bold; margin:0 0 8px;">📞 Contact direct</p>
            <p style="color:rgba(255,255,255,0.6); font-size:13px; margin:0;">
              <a href="tel:5147098609" style="color:#00d4ff;">514-709-8609</a><br/>
              <a href="mailto:coachalexandre2005@gmail.com" style="color:#00d4ff;">coachalexandre2005@gmail.com</a>
            </p>
          </div>

          <p style="color:rgba(255,255,255,0.3); font-size:12px; text-align:center; margin:0;">À bientôt sur M&A Conditioning — Montréal</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
