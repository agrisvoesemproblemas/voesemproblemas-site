'use client'

import Link from 'next/link'
import { MessageCircle, Zap, ClipboardCheck, HelpCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/wa'

const WA_MSG = 'Olá Dra. Agrislaine, preciso de ajuda com um problema no voo.'

const tabs = [
  {
    label: 'WhatsApp',
    href: whatsappLink(WA_MSG),
    icon: MessageCircle,
    external: true,
    color: '#25D366',
  },
  {
    label: 'Live',
    href: '#live',
    icon: Zap,
    external: false,
    color: '#FBBF24',
  },
  {
    label: 'Embarcar',
    href: '#casos',
    icon: ClipboardCheck,
    external: false,
    color: '#1E88E5',
  },
  {
    label: 'Dúvidas',
    href: '#faq',
    icon: HelpCircle,
    external: false,
    color: '#525252',
  },
]

export function MobileTabBar() {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E7EB] bg-white/95 backdrop-blur-md"
      aria-label="Navegação rápida mobile"
    >
      <div className="grid grid-cols-4">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const Tag = tab.external ? 'a' : Link
          const extraProps = tab.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {}
          return (
            <Tag
              key={tab.label}
              href={tab.href}
              {...extraProps}
              className="flex flex-col items-center justify-center gap-1 py-3 text-[#525252] hover:text-[#0A0F1E] transition-colors min-h-[56px]"
              aria-label={tab.label}
            >
              <Icon size={22} style={{ color: tab.color }} />
              <span className="text-[10px] leading-none">{tab.label}</span>
            </Tag>
          )
        })}
      </div>
    </nav>
  )
}
