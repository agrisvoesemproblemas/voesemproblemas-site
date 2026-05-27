import { whatsappLink } from '@/lib/wa'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Até quando posso entrar com uma ação?',
    a: 'Para voos domésticos, o prazo é de 5 anos a partir do incidente. Para voos internacionais, 2 anos. Não espere chegar no limite — quanto mais cedo, mais fácil reunir as provas.',
  },
  {
    q: 'Quanto posso receber em uma indenização?',
    a: 'Depende do tipo de problema, da companhia, do tempo de atraso e dos danos comprovados. Voos com atraso de mais de 4h geralmente resultam em R$ 3.000 a R$ 10.000. Extravio de bagagem pode variar de R$ 2.000 a R$ 15.000. Nossa calculadora dá uma estimativa realista.',
  },
  {
    q: 'Como funciona o pagamento de honorários?',
    a: '30% sobre o valor obtido, somente se ganharmos. Zero custo inicial. Se a ação for indeferida, você não paga nada.',
  },
  {
    q: 'Quanto tempo demora para receber?',
    a: 'Em média 6 a 18 meses, dependendo da comarca e do volume de processos no TJ. Em juizados especiais o prazo costuma ser menor. Acompanhamos você do início ao fim.',
  },
  {
    q: 'Como acompanho meu processo?',
    a: 'Enviamos o número do processo e o link do Tribunal de Justiça competente assim que a ação for protocolada. Você pode consultar a qualquer momento.',
  },
  {
    q: 'E se meu pedido for negado?',
    a: 'Você não paga honorários. Pode haver condenação em honorários de sucumbência (da parte contrária) dependendo do caso — explicamos antes de protocolar.',
  },
  {
    q: 'Vocês atendem em qual região?',
    a: 'Brasil inteiro, 100% online. Não importa onde você mora ou onde o problema aconteceu.',
  },
  {
    q: 'Quais documentos vou precisar?',
    a: 'Cartão de embarque, passagem aérea, comprovante de atraso ou cancelamento emitido pela companhia, recibos de gastos extras (hotel, alimentação, táxi) e comprovante de danos, se houver.',
  },
]

const WA_MSG = 'Olá Dra. Agrislaine, não encontrei minha dúvida no FAQ. Preciso de ajuda com um problema no voo.'

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium text-[#525252] tracking-widest uppercase mb-4">
          — Nº 06 · Dúvidas frequentes
        </p>

        <h2 className="text-3xl sm:text-4xl font-medium text-[#0A0F1E] leading-tight tracking-[-0.02em] mb-12">
          Tudo que você precisa saber antes de entrar em contato
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-[10px] border border-[#E5E7EB] bg-white px-5 data-[state=open]:border-[#1E88E5]/30"
            >
              <AccordionTrigger className="text-sm font-medium text-[#0A0F1E] text-left hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#525252] leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#525252] mb-3">Não achou sua dúvida?</p>
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:text-[#1FB955] transition-colors"
          >
            Manda WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
