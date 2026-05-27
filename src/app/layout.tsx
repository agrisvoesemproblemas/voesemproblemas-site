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
        { '@type': 'Question', name: 'Até quando posso entrar com uma ação?', acceptedAnswer: { '@type': 'Answer', text: 'Para voos domésticos, o prazo é de 5 anos. Para voos internacionais, 2 anos.' } },
        { '@type': 'Question', name: 'Como funciona o pagamento de honorários?', acceptedAnswer: { '@type': 'Answer', text: '30% sobre o valor obtido, somente se ganharmos. Zero custo inicial.' } },
        { '@type': 'Question', name: 'Vocês atendem em qual região?', acceptedAnswer: { '@type': 'Answer', text: 'Brasil inteiro, 100% online.' } },
        { '@type': 'Question', name: 'Quanto tempo demora para receber?', acceptedAnswer: { '@type': 'Answer', text: 'Em média 6 a 18 meses, dependendo da comarca.' } },
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
