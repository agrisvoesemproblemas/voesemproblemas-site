import { Clock, XCircle, Luggage, UserX, ArrowRight } from 'lucide-react'

const services = [
  {
    code: 'DLY',
    icon: Clock,
    title: 'Voo atrasado',
    desc: '≥ 4h, ou conexão perdida por atraso.',
    href: '#casos',
  },
  {
    code: 'CNL',
    icon: XCircle,
    title: 'Voo cancelado',
    desc: 'Sem reacomodação digna ou aviso prévio.',
    href: '#casos',
  },
  {
    code: 'BAG',
    icon: Luggage,
    title: 'Extravio de bagagem',
    desc: 'Temporário (mais de 24h) ou definitivo.',
    href: '#casos',
  },
  {
    code: 'OVB',
    icon: UserX,
    title: 'Overbooking',
    desc: 'Preterição de embarque sem consentimento.',
    href: '#casos',
  },
]

export function Servicos() {
  return (
    <section id="casos" className="py-20 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium text-[#525252] tracking-widest uppercase mb-4">
          — Nº 03 · O que resolvemos
        </p>

        <h2 className="text-3xl sm:text-4xl font-medium text-[#0A0F1E] leading-tight tracking-[-0.02em] max-w-xl mb-12">
          Tipos de problema que tratamos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.code}
                href={s.href}
                className="group flex flex-col gap-4 rounded-[14px] border border-[#E5E7EB] bg-[#FAFAFA] p-6 hover:border-[#1E88E5]/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <Icon size={22} className="text-[#1E88E5]" />
                  <span className="font-mono text-[10px] text-[#1E88E5] tracking-widest">
                    {s.code}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#0A0F1E] mb-1">{s.title}</p>
                  <p className="text-sm text-[#525252] leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1E88E5] group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={12} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
