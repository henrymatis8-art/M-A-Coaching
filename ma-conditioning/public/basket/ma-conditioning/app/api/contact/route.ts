import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'coachalexandre2005@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { prenom, nom, courriel, telephone, message } = await req.json()

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

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
