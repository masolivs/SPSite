import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email é obrigatório' }, { status: 400 })
  }

  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!
  const DC = process.env.MAILCHIMP_SERVER_PREFIX!

  const url = `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (result.title === 'Member Exists') {
    return NextResponse.json({ error: 'Este email já está cadastrado.' }, { status: 400 })
  }

  if (!response.ok) {
    console.error('Erro Mailchimp:', result)
    return NextResponse.json({ error: 'Erro ao inscrever. Tente novamente mais tarde.' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Inscrição realizada com sucesso!' })
}
