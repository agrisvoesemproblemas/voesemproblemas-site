'use client'

import { useState } from 'react'
import { whatsappLink } from '@/lib/wa'

const faqs = [
  {
    q: 'Até quando posso entrar com uma ação?',
    a: 'Para voos internacionais o prazo é de 2 anos. Para voos domésticos, 5 anos. Conta a partir da data do voo.',
  },
  {
    q: 'Como são calculados os honorários?',
    a: '30% sobre o valor obtido, somente se ganharmos. Zero custo inicial. Se a ação for indeferida, você não paga nada.',
  },
  {
    q: 'Quanto tempo até receber?',
    a: 'Tipicamente entre 6 e 18 meses, dependendo da comarca e da agilidade do trâmite. Em alguns casos, com acordo extrajudicial, pode ser mais rápido.',
  },
  {
    q: 'Vocês atendem em qual região?',
    a: 'Brasil inteiro, 100% online. A Dra. Agrislaine tem registro na OAB/SC e OAB/SP, atuando em qualquer jurisdição do país via certificação digital.',
  },
  {
    q: 'Quais documentos vou precisar?',
    a: 'Cartão de embarque, comprovante da passagem, comprovantes da companhia sobre o atraso/cancelamento, recibos de gastos extras. Te enviamos a lista completa após análise do caso.',
  },
  {
    q: 'E se meu pedido for negado?',
    a: 'Você não paga nossos honorários. Pode haver, em casos específicos, condenação a honorários de sucumbência, mas isso é raro e te avisamos antes.',
  },
]

const WA_MSG = 'Olá Dra. Agrislaine, não encontrei minha dúvida no FAQ. Gostaria de uma análise do meu caso.'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-[10px] bg-white px-4 py-3.5 cursor-pointer transition-colors duration-200"
      style={{ border: open ? '0.5px solid #1E88E5' : '0.5px solid #E5E7EB' }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex justify-between items-center gap-3">
        <p className="text-[13px] font-medium text-[#0A0F1E] leading-snug">{q}</p>
        <span className="text-[16px] text-[#525252] flex-shrink-0 select-none">
          {open ? '×' : '+'}
        </span>
      </div>
      {open && (
        <p className="mt-2 text-[13px] text-[#525252] leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="px-4 sm:px-10 py-10 bg-[#FAFAFA] border-t border-[#E5E7EB]/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[26px] font-medium text-[#0A0F1E] tracking-[-0.025em] mb-1.5">
          Dúvidas frequentes
        </h2>
        <p className="text-[14px] text-[#525252] mb-6">
          As perguntas mais comuns sobre nosso atendimento.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>

        <div className="mt-5 text-center">
          <p className="text-[13px] text-[#525252] mb-1">Não achou sua dúvida?</p>
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[#1E88E5] hover:underline"
          >
            Manda WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
