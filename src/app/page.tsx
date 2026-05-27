import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { Hero } from '@/components/sections/Hero'
import { DecisionTree } from '@/components/sections/DecisionTree'
import { Servicos } from '@/components/sections/Servicos'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { Sobre } from '@/components/sections/Sobre'
import { FAQ } from '@/components/sections/FAQ'

export const metadata: Metadata = buildMetadata({
  title: 'Voe sem Problemas — Advocacia especializada em direitos do passageiro aéreo',
  description:
    'Atraso, cancelamento, extravio de bagagem ou overbooking? Análise gratuita em 24h. Você só paga se a gente ganhar. Dra. Agrislaine Oliveira — OAB/SC e OAB/SP.',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <DecisionTree />
      <Servicos />
      <ComoFunciona />
      <Sobre />
      <FAQ />
    </>
  )
}
