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
      subject: `🏀 Message Basketball — ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: white; padding: 40px; border-radius: 8px;">
          <div style="border-left: 4px solid #E63946; padding-left: 16px; margin-bottom: 32px;">
            <h1 style="color: #E63946; font-size: 24px; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 2px;">Message — Programme Basketball</h1>
            <p style="color: rgba(255,255,255,0.4); margin: 0; font-size: 13px;">M&A Conditioning · Formulaire de contact</p>
          </div>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px; width:35%;">Nom</td><td style="padding:8px 0; color:white; font-size:13px;">${prenom} ${nom}</td></tr>
            <tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Courriel</td><td style="padding:8px 0; font-size:13px;"><a href="mailto:${courriel}" style="color:#E63946;">${courriel}</a></td></tr>
            ${telephone ? `<tr><td style="padding:8px 0; color:rgba(255,255,255,0.5); font-size:13px;">Téléphone</td><td style="padding:8px 0; color:white; font-size:13px;">${telephone}</td></tr>` : ''}
            <tr><td colspan="2" style="padding:16px 0 8px; border-top:1px solid rgba(255,255,255,0.08);">
              <p style="color:rgba(255,255,255,0.4); font-size:11px; letter-spacing:2px; text-transform:uppercase; margin:0 0 8px;">Message</p>
              <p style="color:white; font-size:14px; line-height:1.6; margin:0;">${message.replace(/\n/g, '<br/>')}</p>
            </td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Basketball contact error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
