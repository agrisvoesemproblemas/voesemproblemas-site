import { Clock, Luggage, Users } from 'lucide-react'
import { PlaneIcon } from 'lucide-react'

const services = [
  {
    icon: Clock,
    title: 'Voo atrasado',
    desc: 'A partir de 4 horas, conexão perdida ou desembarque tardio.',
  },
  {
    icon: PlaneIcon,
    title: 'Voo cancelado',
    desc: 'Sem reacomodação digna ou aviso antecedente suficiente.',
  },
  {
    icon: Luggage,
    title: 'Bagagem extraviada',
    desc: 'Atraso na entrega, perda definitiva ou avaria.',
  },
  {
    icon: Users,
    title: 'Overbooking',
    desc: 'Preterição de embarque por venda em excesso.',
  },
]

export function Servicos() {
  return (
    <section id="casos" className="px-4 sm:px-10 py-10 bg-white border-t border-[#E5E7EB]/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[26px] font-medium text-[#0A0F1E] tracking-[-0.025em] mb-1.5">
          Casos que assumimos
        </h2>
        <p className="text-[14px] text-[#525252] mb-6">
          Não atendemos só esses, mas representam mais de 90% dos casos resolvidos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-[12px] border border-[#E5E7EB]/80 bg-white p-5 hover:border-[#1E88E5] transition-colors duration-200 cursor-default"
              >
                <Icon size={28} className="text-[#1E88E5]" />
                <p className="mt-3 text-[15px] font-medium text-[#0A0F1E]">{s.title}</p>
                <p className="mt-1 text-[12px] text-[#525252] leading-[1.5]">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
