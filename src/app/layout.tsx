import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '@/components/nav/Header'
import { Footer } from '@/components/nav/Footer'
import { MobileTabBar } from '@/components/nav/MobileTabBar'
import { FloatingWhatsApp } from '@/components/nav/FloatingWhatsApp'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Voe sem Problemas',
    default: 'Voe sem Problemas — Advocacia especializada em direitos do passageiro aéreo',
  },
  description:
    'Atraso, cancelamento, extravio de bagagem ou overbooking? Análise gratuita em 24h. Você só paga se a gente ganhar. Dra. Agrislaine Oliveira — OAB/SC e OAB/SP. Atuação em todo Brasil.',
  metadataBase: new URL('https://voesemproblemas.com'),
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Voe sem Problemas',
      description:
        'Advocacia especializada em direitos do passageiro aéreo. Atuação 100% online em todo Brasil.',
      url: 'https://voesemproblemas.com',
      telephone: '+5548999687068',
      email: 'agriss.cc@gmail.com',
      priceRange: '$$',
      areaServed: 'BR',
      founder: {
        '@type': 'Person',
        name: 'Agrislaine Oliveira',
        jobTitle: 'Advogada',
        memberOf: ['OAB/SC 53.583', 'OAB/SP 505.951'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paulínia',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Até quando posso entrar com uma ação?', acceptedAnswer: { '@type': 'Answer', text: 'Para voos internacionais o prazo é de 2 anos. Para voos domésticos, 5 anos. Conta a partir da data do voo.' } },
        { '@type': 'Question', name: 'Como são calculados os honorários?', acceptedAnswer: { '@type': 'Answer', text: '30% sobre o valor obtido, somente se ganharmos. Zero custo inicial. Se a ação for indeferida, você não paga nada.' } },
        { '@type': 'Question', name: 'Quanto tempo até receber?', acceptedAnswer: { '@type': 'Answer', text: 'Tipicamente entre 6 e 18 meses, dependendo da comarca e da agilidade do trâmite. Em alguns casos, com acordo extrajudicial, pode ser mais rápido.' } },
        { '@type': 'Question', name: 'Vocês atendem em qual região?', acceptedAnswer: { '@type': 'Answer', text: 'Brasil inteiro, 100% online. A Dra. Agrislaine tem registro na OAB/SC e OAB/SP, atuando em qualquer jurisdição do país via certificação digital.' } },
        { '@type': 'Question', name: 'Quais documentos vou precisar?', acceptedAnswer: { '@type': 'Answer', text: 'Cartão de embarque, comprovante da passagem, comprovantes da companhia sobre o atraso/cancelamento, recibos de gastos extras. Te enviamos a lista completa após análise do caso.' } },
        { '@type': 'Question', name: 'E se meu pedido for negado?', acceptedAnswer: { '@type': 'Answer', text: 'Você não paga nossos honorários. Pode haver, em casos específicos, condenação a honorários de sucumbência, mas isso é raro e te avisamos antes.' } },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0A0F1E] antialiased">
        <Header />
        <div className="flex-1 pb-[60px] md:pb-0">{children}</div>
        <Footer />
        <MobileTabBar />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
