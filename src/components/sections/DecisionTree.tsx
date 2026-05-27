'use client'

import { Zap, ClipboardCheck, HelpCircle } from 'lucide-react'

const paths = [
  {
    href: '/live',
    variant: 'amber',
    icon: Zap,
    strong: 'Estou no aeroporto agora',
    sub: 'Guia ao vivo de coleta',
  },
  {
    href: '/caso',
    variant: 'neutral',
    icon: ClipboardCheck,
    strong: 'Tive problema recente',
    sub: 'Formalizar até 2 anos atrás',
  },
  {
    href: '#faq',
    variant: 'neutral',
    icon: HelpCircle,
    strong: 'Quero entender meus direitos',
    sub: 'Casos resolvidos e dúvidas',
  },
]

export function DecisionTree() {
  return (
    <section className="px-4 sm:px-10 pb-9">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {paths.map((p) => {
            const Icon = p.icon
            const isAmber = p.variant === 'amber'
            return (
              <a
                key={p.href}
                href={p.href}
                className="flex items-center gap-3 rounded-[12px] px-[18px] py-4 transition-all duration-200"
                style={
                  isAmber
                    ? { backgroundColor: '#FBBF24' }
                    : {
                        backgroundColor: '#FFFFFF',
                        border: '0.5px solid #E5E7EB',
                      }
                }
                onMouseEnter={(e) => {
                  if (!isAmber) {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#1E88E5'
                  } else {
                    ;(e.currentTarget as HTMLElement).style.filter = 'brightness(1.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isAmber) {
                    ;(e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB'
                  } else {
                    ;(e.currentTarget as HTMLElement).style.filter = ''
                  }
                }}
              >
                <Icon
                  size={28}
                  style={{ color: isAmber ? '#412402' : '#1E88E5', flexShrink: 0 }}
                />
                <div>
                  <p
                    className="text-[14px] font-medium leading-[1.15]"
                    style={{ color: isAmber ? '#412402' : '#0A0F1E' }}
                  >
                    {p.strong}
                  </p>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{ color: isAmber ? '#633806' : '#525252' }}
                  >
                    {p.sub}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
