import { Zap, ClipboardCheck, HelpCircle, ArrowRight } from 'lucide-react'

const paths = [
  {
    href: '#live',
    icon: Zap,
    bg: '#FFFBEB',
    border: '#FDE68A',
    iconColor: '#FBBF24',
    label: 'Estou no aeroporto agora',
    description: 'Guia passo a passo para coletar provas em tempo real.',
    urgent: true,
  },
  {
    href: '#caso',
    icon: ClipboardCheck,
    bg: '#FFFFFF',
    border: '#E5E7EB',
    iconColor: '#1E88E5',
    label: 'Tive problema recente',
    description: 'Formalizar caso de até 2 anos atrás.',
    urgent: false,
  },
  {
    href: '#faq',
    icon: HelpCircle,
    bg: '#FFFFFF',
    border: '#E5E7EB',
    iconColor: '#525252',
    label: 'Quero entender meus direitos',
    description: 'Perguntas frequentes e como funciona.',
    urgent: false,
  },
]

export function DecisionTree() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm text-[#525252] mb-6">Ou escolha seu momento</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {paths.map((p) => {
            const Icon = p.icon
            return (
              <a
                key={p.href}
                href={p.href}
                className="group flex flex-col gap-3 rounded-[14px] border p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: p.bg, borderColor: p.border }}
              >
                <div className="flex items-center justify-between">
                  <Icon size={20} style={{ color: p.iconColor }} />
                  <ArrowRight
                    size={16}
                    className="text-[#D1D5DB] group-hover:text-[#525252] transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0A0F1E] leading-snug">{p.label}</p>
                  <p className="mt-1 text-xs text-[#525252] leading-relaxed">{p.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
