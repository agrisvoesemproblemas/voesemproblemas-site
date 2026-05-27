import { MessageSquare, Search, FileText, Scale, Trophy } from 'lucide-react'
import { whatsappLink } from '@/lib/wa'

const steps = [
  {
    n: '01',
    icon: MessageSquare,
    title: 'Você manda seu caso',
    desc: 'Descreva o ocorrido pelo WhatsApp ou pelo formulário. Sem burocracia.',
  },
  {
    n: '02',
    icon: Search,
    title: 'Análise em 24h',
    desc: 'Avaliamos se há fundamento para ação. Resposta gratuita, sempre.',
  },
  {
    n: '03',
    icon: FileText,
    title: 'Lista de documentos',
    desc: 'Enviamos o checklist exato: passagem, cartão de embarque, recibos.',
  },
  {
    n: '04',
    icon: Scale,
    title: 'Protocolo da ação',
    desc: 'Dra. Agrislaine protocola tudo. Você acompanha pelo número do processo.',
  },
  {
    n: '05',
    icon: Trophy,
    title: 'Acompanhamento até o fim',
    desc: 'Da petição à indenização. Você só paga 30% se ganhar.',
  },
]

const WA_MSG = 'Olá Dra. Agrislaine, quero embarcar meu caso de problema em voo.'

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="text-xs font-medium text-[#525252] tracking-widest uppercase mb-4">
          — Nº 02 · Como funciona
        </p>

        <h2 className="text-3xl sm:text-4xl font-medium text-[#0A0F1E] leading-tight tracking-[-0.02em] max-w-2xl mb-14">
          5 passos. Você fala pelo WhatsApp,{' '}
          <span className="text-[#1E88E5]">a gente cuida do resto.</span>
        </h2>

        {/* Steps: horizontal desktop, vertical mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} className="flex sm:flex-col gap-4 sm:gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E6F1FB]">
                  <Icon size={18} className="text-[#1E88E5]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#1E88E5] tracking-widest mb-1">{s.n}</p>
                  <p className="text-sm font-medium text-[#0A0F1E] leading-snug mb-1">{s.title}</p>
                  <p className="text-xs text-[#525252] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12">
          <a
            href={whatsappLink(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E88E5] hover:text-[#1565C0] transition-colors"
          >
            Embarcar meu caso agora →
          </a>
        </div>
      </div>
    </section>
  )
}
